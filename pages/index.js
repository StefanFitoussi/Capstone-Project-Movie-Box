import styled from "styled-components";
import MovieCard from "../components/MovieCard";

export default function Home() {
  return (
    <>
      <StyledH2>Choose your Movies:</StyledH2>
      <MovieCard />
    </>
  );
}

const StyledH2 = styled.h2`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  letter-spacing: 0.5px;
`;
