import React from "react";
import styled from "styled-components";
import Styles from "/src/Components/Team_Card/Team_Card.module.css";
import Team_Card from "../Team_Card/Team_Card";
import Team1 from "/src/assets/Images/oplano.jpeg.jpg";
import Team2 from "/src/assets/Images/stephen.jpg";
import Team3 from "/src/assets/Images/wilma.jpg";
import Team4 from "/src/assets/Images/Img5.jpg";

const Title = styled.h1`
  text-align: center;
  font-size: 2.1rem;
  text-transform: uppercase;
  color: #0a2640;

  @media screen and (max-width: 767px) {
    padding-bottom: 5%;
    font-size: 2rem;
  }
`;

const Team = () => {
  return (
    <>
      <Title>Our Team</Title>

      <div className={Styles.our_team_wripper}>
        <Team_Card
          name={"Oplano james Mulbah"}
          image={
            <img src={Team1} alt="team member" className={Styles.img_wripper} />
          }
        />
        <Team_Card
          name={"Stephen Awolaya"}
          image={
            <img src={Team2} alt="team member" className={Styles.img_wripper} />
          }
        />
        <Team_Card
          name={"Wilma Adam Willaim"}
          image={
            <img src={Team3} alt="team member" className={Styles.img_wripper} />
          }
        />
        <Team_Card
          name={"Abdolla Sudan"}
          image={
            <img src={Team4} alt="team member" className={Styles.img_wripper} />
          }
        />
      </div>
    </>
  );
};

export default Team;
