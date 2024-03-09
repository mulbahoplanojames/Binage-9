import styled from "styled-components";
import Styles from "/src/Components/Products/Product.module.css";
import Products_card from "./Product_Card/Products_card";
import Product_card2 from "./Product_Card/Product_card2";
import { LuPalette } from "react-icons/lu";
import {
  BsCodeSquare,
  BsLightbulb,
  BsStack,
  BsCaretUpSquare,
  BsFillRocketTakeoffFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Title = styled.h1`
  padding: 6% 0px 4% 0px;
  text-align: center;
  font-size: 2.1rem;
  text-transform: uppercase;
  color: #0a2640;

  @media screen and (max-width: 767px) {
    padding: 13% 0px 9% 0px;
    font-size: 2rem;
  }
`;

const Products = () => {
  return (
    <>
      <section className={Styles.products}>
        <Title>Our Products.</Title>

        <div className={Styles.product_cards_wripper}>
          <Link to="/" className={Styles.link}>
            <Products_card Icon={<BsCodeSquare className={Styles.icon} />} />
          </Link>
          <Link to="/" className={Styles.link}>
            <Product_card2 Icon={<LuPalette className={Styles.icon} />} />
          </Link>
          <Link to="/" className={Styles.link}>
            <Products_card Icon={<BsLightbulb className={Styles.icon} />} />
          </Link>
          <Link to="/" className={Styles.link}>
            <Product_card2 Icon={<BsStack className={Styles.icon} />} />
          </Link>
          <Link to="/" className={Styles.link}>
            <Products_card Icon={<BsCaretUpSquare className={Styles.icon} />} />
          </Link>
          <Link to="/" className={Styles.link}>
            <Product_card2
              Icon={<BsFillRocketTakeoffFill className={Styles.icon} />}
            />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Products;
