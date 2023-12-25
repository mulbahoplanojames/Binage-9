import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 98%;
  padding: 6px 20px;
  background: transparent;
  font-size: 1.2rem;
  border: 2px solid #0a2640;
  border-radius: 10px;
  color: #0a2640;
  cursor: pointer;
  transition: 0.4s ease-out;

  &:hover {
    background: #ed017f;
    border: 2px solid transparent;
    color: #ffffff;
  }
`;

const LogIn_Button = () => {
  return (
    <>
      <Button>Log In</Button>
    </>
  );
};

export default LogIn_Button;
