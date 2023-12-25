import React from "react";
import styled from "styled-components";
import Styles from "/src/Components/Hero/Hero.module.css";
import Button from "/src/UI/Buttons/ButtonMian.jsx";
import heroImage from "/src/assets/Images/Hero2.jpg";
import { Link } from "react-router-dom";

// const Title = styled.h1({
//   fontSize: "2.8rem",
//   color: "#0a2640",
//   paddingBottom: "1.8rem",
//   lineHeight: "3.5rem",
//   fontWeight: "520",
// });

const Hero = () => {
  return (
    <>
      <section id={Styles.hero}>
        <div className={Styles.hero_wripper}>
          <div className={Styles.hero_content}>
            <h1 className={Styles.title}>
              Bring everyone together to build better products.
            </h1>
            <p className={Styles.description}>
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>

            <Link to="/account_opt">
              <Button />
            </Link>
          </div>
          <div className={`${Styles.hero_content} ${Styles.image_content}`}>
            <img
              src={heroImage}
              alt="Illustration image"
              className={Styles.img}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
