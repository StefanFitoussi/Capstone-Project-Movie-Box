import styled from "styled-components";
import MovieCard from "../components/MovieCard";
import WatchList from "../components/WatchList";

export default function Home() {
  return (
    <>
      <StyledH2>Choose your Movies:</StyledH2>
      <MovieCard />
      <WatchList />
    </>
  );
}

const StyledH2 = styled.h2`
  margin-top: 35px;
`;
