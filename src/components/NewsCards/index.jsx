import Row from "react-bootstrap/Row";
import NewsCard from "../NewsCard";
import styles from "./style.module.css";

const NewsCards = ({ data }) => {
    return (
        <Row xs={1} md={2} lg={3} className="mx-3">
            {
                data.length ?
                    data.map((item, itemIdx) => (<NewsCard data={item} key={itemIdx} />))
                    :
                    <h2 className={styles.not_found}>Data tidak ditemukan!</h2>
            }
        </Row>
    );
};

export default NewsCards;
