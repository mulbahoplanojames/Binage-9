import React from "react";
import Styles from "/src/Components/Feature_Jobs/Features_Jobs.module.css";

const Job_card = (props) => {
  const { job_name, job_descriptions } = props;

  return (
    <>
      <div className={Styles.card_wripper}>
        <h1 className={Styles.job_name}>{job_name}</h1>
        <p className={Styles.jod_description}>{job_descriptions}</p>
      </div>
    </>
  );
};

export default Job_card;
