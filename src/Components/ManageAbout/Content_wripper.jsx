import React from "react";
import styles from "/src/Components/ManageAbout/About_Manage.module.css";

const Content_wripper = (props) => {
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

export default Content_wripper;
