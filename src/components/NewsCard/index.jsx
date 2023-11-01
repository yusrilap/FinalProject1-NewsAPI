import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Button, Card, Col } from "react-bootstrap";
import { addSaved, deleteSaved } from "../../redux/NewsSlice";
import { useDispatch, useSelector} from "react-redux";
import { useState } from "react";

const NewsCard = ({ data}) => {
    const savedData = useSelector(state => state.news.saved);
    const dispatch = useDispatch();
    const isSaved = savedData.some((item) => item.url === data.url);
    const updatedData = { ...data,isSaved };
    const [datas, setDatas] = useState(updatedData);
    const handleOnSave=()=> {
        const updatedIsSave = !datas.isSaved;
        if(updatedIsSave){
            dispatch(addSaved({ ...datas, isSaved: updatedIsSave }));
        }else{
            dispatch(deleteSaved(datas.url))
        }
        setDatas({ ...datas, isSaved: updatedIsSave });
    }
    return (
        <Col>
            <Card style={{ minHeight: "30rem" }} className="m-2 mt-4">
                <Card.Img variant="top" src={datas.urlToImage} alt="thumbnail" style={{ height: "15rem" }} />
                <Card.Body>
                    <Card.Title>{datas.title}</Card.Title>
                    <Card.Subtitle className="my-3">{datas.source.name}</Card.Subtitle>
                    <Card.Text>{datas.description}</Card.Text>
                    <Button variant="info" href={datas.url} target="_blank">News Page</Button>{" "}
                    <Button as={Link} variant={datas.isSaved ? "danger": "success"} onClick={()=>handleOnSave()} >{datas.isSaved ? 'Un-Save': 'Save'}</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default NewsCard;