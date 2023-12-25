import React from "react";
import Styles from "/src/Components/ManageAbout/About_Manage.module.css";
import styled from "styled-components";
import Content_wripper from "./Content_wripper";

const Title = styled.h1({
  fontSize: "2.5rem",
  lineHeight: "3rem",
  paddingBottom: "1.3rem",
  color: "#0a2640",
});

const Description = styled.p({
  fontSize: "1.1rem",
  opacity: ".8",
});

const About_Us = () => {
  return (
    <>
      <div className={Styles.about_us}>
        <div className={Styles.about_us_wripper}>
          <div className={Styles.about_us_content}>
            <Title>What’s different about Manage?</Title>
            <Description>
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </Description>
          </div>
          <div className={Styles.about_us_content}>
            <Content_wripper
              num={"01"}
              title={"Track company-wide progress"}
              description={
                "See how your day-to-day tasks fit into the wider visio. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
              }
            />
            <Content_wripper
              num={"02"}
              title={"Advanced built-in reports"}
              description={
                "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
              }
            />
            <Content_wripper
              num={"03"}
              title={"Everything you need in one place"}
              description={
                "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About_Us;
