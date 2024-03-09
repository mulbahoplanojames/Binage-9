import React, { useState } from "react";
import Styles from "/src/Components/SignUp_form/signUp.module.css";
import SignUp_Button from "../../UI/Sign_up_Button/SignUp_Button";
import { FaGooglePlus, FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sign_up = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
  };

  return (
    <>
      <div className={Styles.sign_up}>
        <div className={Styles.signUp_wripper}>
          <h1 className={Styles.title}>Create Account</h1>
          <p className={Styles.description}>
            Register your account and join our community!
          </p>

          <form action="/" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className={Styles.label}>
                Name
              </label>
              <input
                type="text"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                className={Styles.input}
              />
            </div>
            <div>
              <label htmlFor="email" className={Styles.label}>
                Email
              </label>
              <input
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className={Styles.input}
              />
            </div>
            <div>
              <label htmlFor="phone" className={Styles.label}>
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                required
                onChange={(e) => setPhone(e.target.value)}
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
                required
                onChange={(e) => setPassword(e.target.value)}
                className={Styles.input}
              />
            </div>
            <div>
              <input type="checkbox" className={Styles.checkbox} />
              <span className={Styles.span1}>
                I agree to the terms and conditions
              </span>
            </div>
            <SignUp_Button />
            <div>
              <span className={Styles.span2}>
                <strong>Or</strong> sign up using
              </span>
            </div>

            <div className={Styles.icon_wripper}>
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
                Already have an account?
                <Link to="/logIn" className={Styles.link}>
                  Sign In
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Sign_up;
