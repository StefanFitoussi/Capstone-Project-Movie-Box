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
                <MovieTitle>{movie.original_title}</MovieTitle>
                <MovieDetails>
                  Veröffentlichungsdatum: {movie.release_date}
                </MovieDetails>
                <BottomMovieDetails>
                  Laufzeit: {movie.runtime} Min.
                </BottomMovieDetails>
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

const MovieTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
`;

const MovieDetails = styled.p`
  list-style-type: none;
  margin-top: 0;
  margin-bottom: 0;
`;

const BottomMovieDetails = styled.p`
  list-style-type: none;
  margin-top: 0;
`;
