import styled from "styled-components";
import GetStarted_Btn from "../../UI/Buttons/GetStarted_Btn";
import { Link } from "react-router-dom";

const Title = styled.h1`
  font-size: 2.3rem;
  color: #ffffff;
  line-height: 2.8rem;

  @media (max-width: 767px) {
    font-size: 1.8rem;
    text-align: center;
  }
`;

const Getstartedwripper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 24%;
  padding: 3rem 0px;
  background: #ed017f;

  @media (max-width: 767px) {
    gap: 30px;
    padding: 3rem 5px;
  }
`;

const GetStarted = () => {
  return (
    <>
      <Getstartedwripper>
        <Title>
          Simplify how your team <br /> works today..
        </Title>

        <Link to="/accountoption">
          <GetStarted_Btn />
        </Link>
      </Getstartedwripper>
    </>
  );
};

export default GetStarted;
