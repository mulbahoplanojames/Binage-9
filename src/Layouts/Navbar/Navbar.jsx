import { useState } from "react";
import styled from "styled-components";
import Styles from "/src/Layouts/Navbar/Navbar.module.css";
import Nav_Button from "../../UI/Nav_Button/Nav_Button";
import { Link } from "react-router-dom";
import { MdOutlineMenu, MdOutlineCancel } from "react-icons/md";
import Navlinks from "../../Constant/Constant";

const Logo = styled.nav({
  fontSize: "2.1rem",
  color: "#0a2640",
  fontWeight: "450",
  textDecoration: "none",
});

const Span = styled.span({
  color: "#ed017f",
});

const Navbar = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const showMenu = () => {
    setMenuVisibility(true);
  };

  const hideMenu = () => {
    setMenuVisibility(false);
  };

  const navLinksStyle = {
    top: isMenuVisible ? "3.7rem" : "-400px",
  };

  return (
    <>
      <header>
        <nav className={Styles.nav}>
          <Link
            to="/"
            style={{ textDecoration: "none", display: "inline-block" }}
          >
            <div className="logo_wripper">
              <Logo className="logo">
                Binage<Span>!9</Span>
              </Logo>
            </div>
          </Link>

          <MdOutlineMenu className={Styles.showMenu} onClick={showMenu} />

          <div className={Styles.nav_links} style={navLinksStyle}>
            <ul>
              {Navlinks.map((navlink) => {
                return (
                  <li key={navlink.label}>
                    <Link to={navlink.href} onClick={hideMenu}>
                      {navlink.label}
                    </Link>
                  </li>
                );
              })}

              <Link to="/accountoption">
                <Nav_Button />
              </Link>
            </ul>
            <MdOutlineCancel className={Styles.hideMenu} onClick={hideMenu} />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
