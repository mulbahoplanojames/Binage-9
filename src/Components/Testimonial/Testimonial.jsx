import styled from "styled-components";
import ButtonMain from "/src/UI/Buttons/ButtonMian.jsx";
import Client_Card from "./ClientCard/Client_Card";
import clientTestimonial from "../../Data/ClientData/ClientData";
import { Link } from "react-router-dom";

const Testimonaial = styled.div({
  padding: "2rem 0px",
});

const Title = styled.h1({
  textAlign: "center",
  fontSize: "2.1rem",
  paddingBottom: "6rem",
  color: "#0a2640",
});

const Testimonaial_Wripper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",
  flexWrap: "wrap",
});

const Button_wripper = styled.div`
  margin: 3% 0px 2% 46%;

  @media screen and (max-width: 767px) {
    margin: 3% 0px 2% 30%;
  }
`;

const Testimonial = () => {
  return (
    <>
      <Testimonaial>
        <Title>What they&apos;ve said</Title>

        <Testimonaial_Wripper>
          {clientTestimonial.map((testimonial) => {
            return (
              <Client_Card
                key={testimonial.id}
                client_name={testimonial.name}
                client_img={testimonial.image}
                client_testimonial={testimonial.description}
              />
            );
          })}
        </Testimonaial_Wripper>

        <Button_wripper>
          <Link to="/">
            <ButtonMain />
          </Link>
        </Button_wripper>
      </Testimonaial>
    </>
  );
};

export default Testimonial;
