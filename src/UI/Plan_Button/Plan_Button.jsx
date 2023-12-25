import React from "react";
import styled from "styled-components";

const PlanButton = styled.button`
  padding: 10px 30px;
  font-size: 1.2rem;
  border: 1px solid lightgray;
  border-radius: 5px;
  background: transparent;
  color: #0a2640;
  cursor: pointer;
  text-transform: capitalize;
  transition: 0.4s ease-out;

  &:hover {
    border: 1px solid transparent;
    background: #0a2640;
    color: #ffffff;
  }
`;

const Plan_Button = (props) => {
  return (
    <>
      <PlanButton>Start Free trial</PlanButton>
    </>
  );
};

export default Plan_Button;
