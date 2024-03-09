import styled from "styled-components";
import Team_Card from "../TeamCard/TeamCard";
import team_data from "../../Data/TeamData/TeamData";

const Title = styled.h1`
  text-align: center;
  font-size: 2.1rem;
  text-transform: uppercase;
  color: #0a2640;

  @media screen and (max-width: 767px) {
    padding-bottom: 5%;
    font-size: 2rem;
  }
`;

const TeamCardWripper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
  padding: 6% 0px 4% 0px;
`;

const Team = () => {
  return (
    <>
      <Title>Our Team</Title>

      <TeamCardWripper>
        {team_data.map((data, i) => {
          return (
            <Team_Card
              key={i}
              id={data.id}
              name={data.name}
              position={data.position}
              image={data.image}
            />
          );
        })}
      </TeamCardWripper>
    </>
  );
};

export default Team;
