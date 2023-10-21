// import { Link } from "react-router-dom"
// import "./Card.css"
// const Card = ({author,title,name,handleOnClickNewsPage,handleOnClickSave})=> {
//     return(
//         <div className="card-container">
//             <p>{author}</p>
//             <h3>{title}</h3>
//             <p>{name}</p>
//             <div className="card-container-btn">
//                 <Link to={handleOnClickNewsPage} target="_blank" className="btn-newPage">New Page</Link>
//                 <button className="btn-save" onClick={handleOnClickSave}>Save</button>
//             </div>
//         </div>
//     )
// }
// export default Card

import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Card, Col } from "react-bootstrap";
import { addSaved } from "../../redux/NewsSlice";

const NewsCard = ({ data }) => {
    const dispatch = useDispatch();

    const handleSave = () => {
        dispatch(addSaved(data));
        Swal.fire({
            title: "Item Saved!",
            icon: "success"
        });
    };

    return (
        <Col>
            <Card style={{ minHeight: "30rem" }} className="m-2 mt-4">
                <Card.Img variant="top" src={data.urlToImage} alt="thumbnail" style={{ height: "15rem" }} />
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Subtitle className="my-3">{data.source.name}</Card.Subtitle>
                    <Card.Text>{data.description}</Card.Text>
                    <Button variant="info" href={data.url} target="_blank">News Page</Button>{" "}
                    <Button as={Link} variant="success" onClick={handleSave}>Save</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default NewsCard;