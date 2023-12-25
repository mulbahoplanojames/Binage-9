import React from "react";
import styled from "styled-components";
import Client_Card from "./ClientCard/Client_Card";
import ButtonMain from "/src/UI/Buttons/ButtonMian.jsx";

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

const Image = styled.img({
  width: "100%",
  height: "100%",
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
        <Title>What they've said</Title>

        <Testimonaial_Wripper>
          <Client_Card
            client_name={"Anisha Li"}
            client_img={<Image src="/src/assets/Images/avatar-ali.png" />}
            client_testimonial={
              "“BInage!9 has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
            }
          />
          <Client_Card
            client_name={"Ali Bravo"}
            client_img={<Image src="/src/assets/Images/avatar-anisha.png" />}
            client_testimonial={
              "“We have been able to cancel so many other subscriptions since using Binage!9. There is no more cross-channel confusion and everyone is much more focused.”"
            }
          />
          <Client_Card
            client_name={"Richard Watts"}
            client_img={<Image src="/src/assets/Images/avatar-richard.png" />}
            client_testimonial={
              "Biname!9 allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”"
            }
          />
        </Testimonaial_Wripper>
        <Button_wripper>
          <a href="/">
            <ButtonMain />
          </a>
        </Button_wripper>
      </Testimonaial>
    </>
  );
};

export default Testimonial;
