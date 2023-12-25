import React from "react";
import Styles from "/src/Components/Feature_Jobs/Features_Jobs.module.css";
import styled from "styled-components";
import Job_card from "./Job_Cards/Job_card";

const Title = styled.h1`
  font-size: 2.1rem;
  color: #0a2640;
  text-transform: uppercase;
  text-align: center;
  padding: 5% 0px 2% 0px;

  @media screen and (max-width: 767px) {
    font-size: 2rem;
    padding: 10% 0px 5% 0px;
  }
`;

const Feature_jobs = () => {
  return (
    <>
      <div className={Styles.feature_jod}>
        <Title>Featured Jobs</Title>

        <div className={Styles.jobs_card_wripper}>
          <Job_card
            job_name={"Free Lancing"}
            job_descriptions={"Build work for clients"}
          />
          <Job_card
            job_name={"Software Engineering"}
            job_descriptions={"Create Real world projects"}
          />
          <Job_card
            job_name={"App development"}
            job_descriptions={"Create real world Apps"}
          />
        </div>
      </div>
    </>
  );
};

export default Feature_jobs;
