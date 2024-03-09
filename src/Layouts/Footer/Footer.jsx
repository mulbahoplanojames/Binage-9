import { useState } from "react";
import styled from "styled-components";
import Styles from "/src/Layouts/Footer/Footer.module.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const Footer_wripper = styled.div`
  padding: 2rem 1rem;
  background: #010101;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;

  @media screen and (max-width: 767px) {
    // flex-direction: column-reverse;
  }
`;

const Title = styled.h1({
  fontSize: "2.2rem",
  color: "#ffffff",
});

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <>
      <Footer_wripper>
        <div className={Styles.footer_content}>
          <Title>
            Binage<span style={{ color: "#ed017f" }}>!9</span>
          </Title>

          <div className={Styles.icon_wripper}>
            <FaFacebook className={Styles.icon} />
            <FaYoutube className={Styles.icon} />
            <FaTwitter className={Styles.icon} />
            <FaPinterest className={Styles.icon} />
            <FaInstagram className={Styles.icon} />
          </div>
        </div>

        <div className={Styles.footer_content}>
          <div className={Styles.web_links}>
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
              <Link to="/pricing">Pricing</Link>
            </p>
            <p>
              <Link to="/product">Product</Link>
            </p>
            <p>
              <Link to="/about">About Us</Link>
            </p>
          </div>
        </div>

        <div className={Styles.footer_content}>
          <div className={Styles.web_links}>
            <p>
              <Link to="/carrer">Careers</Link>
            </p>
            <p>
              <Link to="/community">Community</Link>
            </p>
            <p>
              <Link
                to="/"
                style={{ paddingBottom: "14%", display: "inline-block" }}
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>

        <div className={`${Styles.footer_content} ${Styles.input_content}`}>
          <form action="/" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={Styles.input}
              placeholder="Enter your email"
            />
            <input type="submit" id={Styles.submit} />
          </form>

          <p className={Styles.copyright}>
            &copy; Copyright 2023. All right reserved
          </p>
        </div>
      </Footer_wripper>
    </>
  );
};

export default Footer;
