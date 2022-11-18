import styled from "styled-components";
import movieData from "../db.json";

export default function Home() {
  return (
    <>
      <h2>Your Movies</h2>
      <MovieList>
        {movieData &&
          movieData.map((movie) => {
            return (
              <li key={movie.id}>
                <MovieTitleH3>{movie.original_title}</MovieTitleH3>
                <ReleaseDate>
                  Veröffentlichungsdatum: {movie.release_date}
                </ReleaseDate>
                <Runtime>Laufzeit: {movie.runtime} Min.</Runtime>
              </li>
            );
          })}
      </MovieList>
    </>
  );
}

const MovieList = styled.ul`
  list-style-type: none;
`;

const MovieTitleH3 = styled.h3`
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
`;

const ReleaseDate = styled.p`
  list-style-type: none;
  margin-top: 0;
  margin-bottom: 0;
`;

const Runtime = styled.p`
  list-style-type: none;
  margin-top: 0;
`;
