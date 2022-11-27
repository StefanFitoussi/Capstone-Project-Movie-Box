import styled from "styled-components";
import PopularList from "../components/PopularList";
import MovieCard from "../components/PopularList";

export default function Home() {
  return (
    <>
      <StyledH2>Choose your Movies:</StyledH2>
      <PopularList />
    </>
  );
}

const StyledHome = styled.p`
  top: 0;
`;

const StyledH2 = styled.h2`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  letter-spacing: 0.5px;
  margin-top: 0;
`;
