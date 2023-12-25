import React from "react";
import Styles from "/src/Components/Products/Product.module.css";

const Products_card = (props) => {
  const { Icon } = props;
  return (
    <>
      <div className={Styles.Card_wripper}>
        <div className={Styles.icon_wripper}>{Icon}</div>
        <p className={Styles.title}>Sourcing</p>
        <p className={Styles.description}>
          Once you have a product prototype you are satisfy with, it's time.
        </p>
      </div>
    </>
  );
};

export default Products_card;
