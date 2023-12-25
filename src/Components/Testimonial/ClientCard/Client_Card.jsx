import React from "react";
import styled from "styled-components";

const Card_Wripper = styled.div({
  width: "370px",
  padding: "1.3rem 1.1rem",
  background: " hsl(0, 0%, 98%)",
  borderRadius: "10px",
  position: "relative",
  textAlign: "center",
});

const Client_img = styled.div({
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  background: "teal",
  position: "absolute",
  top: "-40px",
  right: "41%",
});

const Client_name = styled.p({
  fontSize: "1.3rem",
  padding: "2.3rem 0px 1rem 0px",
  color: "#0a2640",
});

const Client_Testimonial = styled.p({
  fontSize: "1.012rem",
  opacity: ".7",
});

const Client_Card = (props) => {
  const { client_name, client_img, client_testimonial } = props;

  return (
    <>
      <Card_Wripper>
        <Client_img>{client_img}</Client_img>
        <Client_name>{client_name}</Client_name>
        <Client_Testimonial>{client_testimonial}</Client_Testimonial>
      </Card_Wripper>
    </>
  );
};

export default Client_Card;
