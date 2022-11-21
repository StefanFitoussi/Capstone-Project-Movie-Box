import styled from "styled-components";
import MovieCard from "../components/MovieCard";

export default function Home() {
  return (
    <>
      <Background />
      <StyledH2>Choose your Movies:</StyledH2>
      <MovieCard />
    </>
  );
}

const StyledH2 = styled.h2`
  margin-top: 35px;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  top: 0;
  left: 0;
  z-index: -10;
`;
