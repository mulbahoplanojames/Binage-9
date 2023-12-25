import React from "react";
import Styles from "/src/Components/Pricing/Pricing.module.css";
import styled from "styled-components";
import { BiSolidCheckCircle } from "react-icons/bi";
import Plan_Button from "../../../UI/Plan_Button/Plan_Button";

const Pricing_card = (props) => {
  const { title, description, price, planTitle, plan1, plan2, plan3 } = props;
  return (
    <>
      <div className={Styles.card_wripper}>
        <p className={Styles.title}>{title}</p>
        <p className={Styles.description}>{description}</p>
        <h2 className={Styles.price}>{price}</h2>

        <div className="plan_options">
          <p className={Styles.plan_title}>{planTitle}</p>
          <p className={Styles.plan}>
            <BiSolidCheckCircle className={Styles.icon} />
            {plan1}
          </p>
          <p className={Styles.plan}>
            <BiSolidCheckCircle className={Styles.icon} />
            {plan2}
          </p>
          <p className={Styles.plan}>
            <BiSolidCheckCircle className={Styles.icon} />
            {plan3}
          </p>
        </div>
        <div className={Styles.btn_wripper}>
          <a href="/">
            <Plan_Button />
          </a>
        </div>
      </div>
    </>
  );
};

export default Pricing_card;
