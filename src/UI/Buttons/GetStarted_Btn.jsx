import React from "react";
import styled from "styled-components";

const Button = styled.button({
  padding: "6px 14px",
  fontSize: "1.2rem",
  border: "2px solid transparent",
  borderRadius: "10px",
  background: "#ffffff",
  color: "#ed017f",
  boxShadow: "3px 3px 2px 0px #243073",
  cursor: "pointer",
});

const GetStarted_Btn = () => {
  return (
    <>
      <Button>Get Started</Button>
    </>
  );
};

export default GetStarted_Btn;
