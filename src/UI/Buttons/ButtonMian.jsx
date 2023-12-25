import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 6px 14px;
  font-size: 1.2rem;
  border: 2px solid transparent;
  border-radius: 10px;
  background: #ed017f;
  color: #ffffff;
  box-shadow: 3px 3px 2px 0px #243073;
  cursor: pointer;
  transition: 0.5s ease-in;

  &:hover {
    opacity: 0.9;
    transform: translateY(-10px);
  }
`;

const ButtonMain = () => {
  return (
    <>
      <Button>Get Started</Button>
    </>
  );
};

export default ButtonMain;
