import styled from "styled-components";
import movieData from "../../db.json";

export default function MovieCard() {
  return (
    <>
      <MovieList>
        {movieData &&
          movieData.map((movie) => {
            return (
              <MovieListItem key={movie.id}>
                <MovieTitleH3>{movie.original_title}</MovieTitleH3>
                <Poster>{movie.poster_path}</Poster>
                <UserRating>User-Rating: {movie.vote_average}</UserRating>
                <ReleaseDate>Release-Date: {movie.release_date}</ReleaseDate>
                <Runtime>Runtime: {movie.runtime} Min.</Runtime>
                <Overview>Overview: {movie.overview}</Overview>
              </MovieListItem>
            );
          })}
      </MovieList>
    </>
  );
}

const MovieList = styled.ul`
  list-style-type: none;
  max-width: 450px;
`;

const MovieListItem = styled.li`
  border: 4px solid black;
  padding: 8px;
  margin: 25px;
  border-radius: 10px;
  background-color: var(--background-primary);
`;

const MovieTitleH3 = styled.h3`
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
`;

const Poster = styled.p`
  border-radius: 10px;
  margin-top: 0;
  margin-bottom: 0;
`;

const UserRating = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`;

const ReleaseDate = styled.p`
  list-style-type: none;
  margin-top: 0;
  margin-bottom: 0;
`;

const Runtime = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`;

const Overview = styled.p`
  list-style-type: none;
  margin-top: 0;
`;
