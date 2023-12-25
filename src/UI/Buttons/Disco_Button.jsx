import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 6px 14px;
  background: #ed017f;
  font-size: 1.2rem;
  border: 2px solid transparent;
  border-radius: 10px;
  color: #ffffff;
  box-shadow: 3px 3px 2px 0px #0a2640;
  cursor: pointer;
  transition: 0.4s ease-out;

  &:hover {
    background: transparent;
    box-shadow: 3px 3px 2px 0px #ed017f;
    border: 2px solid #ed017f;
    color: #0a2640;
  }
`;

const Disco_Button = () => {
  return (
    <>
      <Button>Join now</Button>
    </>
  );
};

export default Disco_Button;
