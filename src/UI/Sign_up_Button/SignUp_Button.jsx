import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 98%;
  padding: 6px 20px;
  background: #0a2640;
  font-size: 1.2rem;
  border: 2px solid transparent;
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
  transition: 0.4s ease-out;
  margin-bottom: 6%;

  &:hover {
    opacity: 0.9;
    border: 2px solid #0a2640;
    color: #ffffff;
  }
`;

const SignUp_Button = () => {
  return (
    <>
      <Button>Sign Up</Button>
    </>
  );
};

export default SignUp_Button;
