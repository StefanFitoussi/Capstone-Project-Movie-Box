import styled from "styled-components";
import movieData from "../db.json";

export default function Home() {
  return (
    <main>
      <h1>Your Movies</h1>
      <br />
      {movieData &&
        movieData.map((movie) => {
          return (
            <StyledUl key={movie.id}>
              <FancyLi>{movie.original_title}</FancyLi>
              <StyledLi>Veröffentlichungsdatum: {movie.release_date}</StyledLi>
              <StyledLi>Laufzeit: {movie.runtime} Min.</StyledLi>
            </StyledUl>
          );
        })}
    </main>
  );
}

const StyledUl = styled.ul`
  list-style-type: none;
`;

const FancyLi = styled.li`
  font-size: 1.5rem;
  font-weight: bold;
`;

const StyledLi = styled.li`
  list-style-type: none;
`;
