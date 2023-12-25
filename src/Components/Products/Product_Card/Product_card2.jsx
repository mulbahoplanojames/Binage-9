import React from "react";
import Styles from "/src/Components/Products/Product.module.css";

const Product_card2 = (props) => {
  const { Icon } = props;

  return (
    <>
      <div className={`${Styles.Card_wripper} ${Styles.Card_wripper2}`}>
        <div className={Styles.icon_wripper}>{Icon}</div>
        <p className={Styles.title}>Sourcing</p>
        <p className={Styles.description}>
          Once you have a product prototype you are satisfy with, it's time.
        </p>
      </div>
    </>
  );
};

export default Product_card2;
