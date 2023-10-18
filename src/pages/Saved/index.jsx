import { InfinitySpin } from "react-loader-spinner";
import { useSelector } from "react-redux";
import styles from "./style.module.css";
import SectionHeader from "../../components/SectionHeader";
import TableSection from "../../components/TableSection";

const Saved = () => {
    const data = useSelector((state) => state.news.saved)

    return (
        <div className={styles.container}>
            <SectionHeader title="Saved News" />
            {
                data ?
                    <TableSection headers={["Source", "Title", "Description", "Action"]} datas={data} />
                    :
                    <InfinitySpin color="black" />
            }
        </div>
    );
};

export default Saved;