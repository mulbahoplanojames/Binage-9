import React, { useState } from "react";
import Styles from "/src/Components/SignUp_form/signUp.module.css";
import LogIn_Button from "../../UI/Login_Button/LogIn_Button";
import { FaGooglePlus, FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className={Styles.sign_up}>
        <div className={Styles.signUp_wripper}>
          <h1 className={Styles.title}>Log In</h1>
          <p className={Styles.description}>Welcome back, we had missed you!</p>

          <form action="/" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className={Styles.label}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={Styles.input}
              />
            </div>

            <div>
              <label htmlFor="password" className={Styles.label}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={Styles.input}
              />
            </div>

            <a href="/" className={Styles.forget_password}>
              Forget Password
            </a>

            <LogIn_Button />

            <div>
              <span className={`${Styles.span2} ${Styles.span22}`}>
                <strong>Or</strong> sign up using
              </span>
            </div>

            <div className={`${Styles.icon_wripper} ${Styles.icon_wripper2}`}>
              <a href="/">
                <FaGooglePlus className={Styles.icon} />
              </a>
              <a href="/">
                <FaFacebook className={Styles.icon} />
              </a>
              <a href="/">
                <FaTwitterSquare className={Styles.icon} />
              </a>
            </div>

            <div>
              <span className={Styles.span3}>
                Haven't signed up yet?
                <Link to="/signUp" className={Styles.link}>
                  Sign Up
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
