import { useState, useEffect } from "react";
import styled from "styled-components";
const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=c02216a131e954f6cb9dc96daec0b215";
const API_IMG = "https://image.tmdb.org/t/p/w500/";

export default function MovieCard(
  original_title,
  poster_path,
  vote_average,
  release_date,
  runtime,
  overview
) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <>
      <MovieList>
        return (
        {movies.map((movieReq) => (
          <MovieCard />
        ))}
        <MovieListItem key={movieReq.id} {...movieReq}>
          <MovieTitleH3>{original_title}</MovieTitleH3>
          <img src={API_IMG + poster_path}></img>
          <UserRating>User-Rating: {vote_average}</UserRating>
          <ReleaseDate>Release-Date: {release_date}</ReleaseDate>
          <Runtime>Runtime: {runtime} Min.</Runtime>
          <Overview>Overview: {overview}</Overview>
        </MovieListItem>
        );
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
