import React from "react";
import Styles from "/src/Components/Team_Card/Team_Card.module.css";
import { FaGithub, FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
const Team_Card = (props) => {
  const { name, image } = props;

  return (
    <>
      <div className={Styles.card_wripper}>
        <div>{image}</div>
        <div className={Styles.body}>
          <p className={Styles.name}>{name}</p>
          <p className={Styles.position}>Co-Fonder</p>

          <div className={Styles.icon_wripper}>
            <a href="/">
              <FaGithub className={Styles.icon} />
            </a>
            <a href="/">
              <SiUpwork className={Styles.icon} />
            </a>
            <a href="/">
              <FaTwitter className={Styles.icon} />
            </a>
            <a href="/">
              <FaInstagram className={Styles.icon} />
            </a>
            <a href="/">
              <FaTelegram className={Styles.icon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team_Card;
