import styles from "/src/Components/ManageAbout/AboutManage.module.css";

const Contentwripper = (props) => {
  const { num, title, description } = props;

  return (
    <>
      <div className={styles.content_wripper}>
        <div className={styles.numbs}>
          <p>{num}</p>
        </div>
        <div className={styles.wripper_card}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Contentwripper;
