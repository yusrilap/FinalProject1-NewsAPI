import styles from "./style.module.css";

const SectionHeader = ({ title }) => {
    return (
        <h2 className={styles.title}>{title}</h2>
    );
};

export default SectionHeader;