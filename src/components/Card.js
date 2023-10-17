import { Link } from "react-router-dom"
import "./Card.css"
const Card = ({author,title,name,handleOnClickNewsPage,handleOnClickSave})=> {
    return(
        <div className="card-container">
            <p>{author}</p>
            <h3>{title}</h3>
            <p>{name}</p>
            <div className="card-container-btn">
                <Link to={handleOnClickNewsPage} target="_blank" className="btn-newPage">New Page</Link>
                <button className="btn-save" onClick={handleOnClickSave}>Save</button>
            </div>
        </div>
    )
}
export default Card