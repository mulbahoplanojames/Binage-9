import Styles from "/src/Components/ManageAbout/AboutManage.module.css";
import styled from "styled-components";
import Contentwripper from "./Contentwripper";

const Title = styled.h1`
  font-size: 2.5rem;
  line-height: 2.3rem;
  padding-bottom: 1.3rem;
  color: #0a2640;

  @media screen and (max-width: 767px) {
    font-size: 1.9rem;
  }
`;

const Description = styled.p({
  fontSize: "1.1rem",
  opacity: ".8",
});

const AboutUs = () => {
  return (
    <>
      <div className={Styles.about_us}>
        <div className={Styles.about_us_wripper}>
          <div className={Styles.about_us_content}>
            <Title>What’s different about Manage?</Title>
            <Description>
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams..
            </Description>
          </div>
          <div className={Styles.about_us_content}>
            <Contentwripper
              num={"01"}
              title={"Track company-wide progress"}
              description={
                "See how your day-to-day tasks fit into the wider visio. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
              }
            />
            <Contentwripper
              num={"02"}
              title={"Advanced built-in reports"}
              description={
                "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
              }
            />
            <Contentwripper
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

export default AboutUs;
