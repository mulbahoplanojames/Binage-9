import React from "react";
import Styles from "/src/Components/Pricing/Pricing.module.css";
import styled from "styled-components";
import Pricing_card from "./Pricing_Card/Pricing_card";

const PricingCardWripper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",
  flexWrap: "wrap",
  padding: "1% 0px 8% 0px",
});

const Pricing = () => {
  return (
    <>
      <section className={Styles.pricing}>
        <div className={Styles.main_title}>
          <span className={Styles.individual}>For Indevidual</span>
          <span className={Styles.team}>For Teams</span>
          <span className={Styles.trial}>Now in Beta: Free for 30 days</span>
        </div>

        <PricingCardWripper>
          <Pricing_card
            title={"Pro"}
            description={
              "For indevidual that needs to host their web site on a secure server."
            }
            price={"$0"}
            planTitle={"Get the Basics, Free"}
            plan1={"Free Hosting"}
            plan2={"24/7 Tech Support"}
            plan3={"Free Upgrade"}
          />

          <Pricing_card
            title={"Basic"}
            description={
              "For indevidual that needs Advance hosting of their web site on a more secure server."
            }
            price={"$5"}
            planTitle={"Everything in basic, plus"}
            plan1={"10 GB Disk Space"}
            plan2={"24/7 Tech Support"}
            plan3={"Email Support"}
            className={Styles.wripper_one}
          />

          <Pricing_card
            title={"Business"}
            description={
              "For Teams that needs Advance hosting and sharing on their works"
            }
            price={"$15"}
            planTitle={"Everything in Pro, plus"}
            plan1={"80 GB Disk Space"}
            plan2={"24/7 Tech Support"}
            plan3={"Email Support!"}
          />

          <Pricing_card
            title={"Enterprise"}
            description={
              "For Teams that needs Advance hosting and admin on their works"
            }
            price={"$45"}
            planTitle={"Everything in business, plus"}
            plan1={"200 GB Disk Space"}
            plan2={"24/7 Tech Support"}
            plan3={"Email Support"}
          />
        </PricingCardWripper>
      </section>
    </>
  );
};

export default Pricing;
