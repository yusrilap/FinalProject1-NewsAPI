import Row from "react-bootstrap/Row";
import NewsCard from "../NewsCard";
import styles from "./style.module.css";
import { addSaved } from "../../redux/NewsSlice";
import { useDispatch,useSelector } from "react-redux";
import { } from "react-redux";
const NewsCards = ({ data }) => {
    const dispatch = useDispatch();
    const savedData = useSelector(state => state.news.saved);

    const handleOnSave=(newsData)=> {
        console.log('Isi store setelah data disimpan:', savedData);
        dispatch(addSaved(newsData));
    }
    return (
        <Row xs={1} md={2} lg={3} className="mx-3">
            {
                data.length ?
                    data.map((item, itemIdx) => (<NewsCard data={item} key={itemIdx} handleOnSave={()=>handleOnSave(item)} />))
                    :
                    <h2 className={styles.not_found}>Data tidak ditemukan!</h2>
            }
        </Row>
    );
};

export default NewsCards;
