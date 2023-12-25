import React from "react";
import Styles from "/src/Components/CreateAccount_Opt/Account_Opt.module.css";
import SignUp_Button from "../../UI/Sign_up_Button/SignUp_Button";
import LogIn_Button from "../../UI/Login_Button/LogIn_Button";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Img from "/src/assets/Images/Option.jpg";

const Title = styled.h1({
  textAlign: "center",
  padding: "8% 0px 2% 0px",
  color: "#0a2640",
  fontSize: "2rem",
  paddingBottom: "5rem",
});

const Account_Option = () => {
  return (
    <>
      <div className={Styles.option}>
        <div className={Styles.option_wripper}>
          <div className={Styles.img_wripper}>
            <img src={Img} alt="Illustration" className={Styles.img} />
          </div>
          <Title>Curious Minds</Title>

          <div className="btn_wripper">
            <Link to="/signUp">
              <SignUp_Button />
            </Link>
            <Link to="/logIn">
              <LogIn_Button />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account_Option;
