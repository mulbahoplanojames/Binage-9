import Styles from "/src/Components/TeamCard/TeamCard.module.css";
import { FaGithub, FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { Link } from "react-router-dom";

const Team_Card = (props) => {
  const { name, image, position } = props;

  return (
    <>
      <div className={Styles.card_wripper}>
        <div className={Styles.image_wripper}>
          <img src={image} className={Styles.img} />
        </div>
        <div className={Styles.body}>
          <p className={Styles.name}>{name}</p>
          <p className={Styles.position}>{position}</p>

          <div className={Styles.icon_wripper}>
            <Link to="/">
              <FaGithub className={Styles.icon} />
            </Link>
            <Link to="/">
              <SiUpwork className={Styles.icon} />
            </Link>
            <Link to="/">
              <FaTwitter className={Styles.icon} />
            </Link>
            <Link to="/">
              <FaInstagram className={Styles.icon} />
            </Link>
            <Link to="/">
              <FaTelegram className={Styles.icon} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team_Card;
