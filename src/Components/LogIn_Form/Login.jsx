import { useState } from "react";
import Styles from "/src/Components/SignUp_form/signUp.module.css";
import LogIn_Button from "../../UI/Login_Button/LogIn_Button";
import { FaGooglePlus, FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");

    Swal.fire({
      title: "Login Successful!",
      text: "🥳🎊🎈🌟",
      icon: "success",
    });
  };

  return (
    <>
      <section className={Styles.sign_up}>
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
                required
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
                required
                onChange={(e) => setPassword(e.target.value)}
                className={Styles.input}
              />
            </div>

            <Link to="/" className={Styles.forget_password}>
              Forget Password
            </Link>

            <LogIn_Button />

            <div>
              <span className={`${Styles.span2} ${Styles.span22}`}>
                <strong>Or</strong> sign up using
              </span>
            </div>

            <div className={`${Styles.icon_wripper} ${Styles.icon_wripper2}`}>
              <Link onTouchCancelCapture="/">
                <FaGooglePlus className={Styles.icon} />
              </Link>
              <Link onTouchCancelCapture="/">
                <FaFacebook className={Styles.icon} />
              </Link>
              <Link onTouchCancelCapture="/">
                <FaTwitterSquare className={Styles.icon} />
              </Link>
            </div>

            <div>
              <span className={Styles.span3}>
                Haven&apos;t signed up yet?
                <Link to="/signUp" className={Styles.link}>
                  Sign Up
                </Link>
              </span>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
