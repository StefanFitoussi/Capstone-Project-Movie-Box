import { useState, useEffect } from "react";
import styled from "styled-components";
const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=c02216a131e954f6cb9dc96daec0b215";
const API_IMG = "https://image.tmdb.org/t/p/w500/";

export default function MovieCard() {
  const [movies, setMovies] = useState([]);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <MovieList>
        {movies.map((movie, index) => (
          <MovieListItem key={movie.id}>
            <CardImage
              onClick={handleClick}
              src={API_IMG + movie.poster_path}
            ></CardImage>
            <>
              {toggle ? (
                <CardBody>
                  <UserRating>User-Rating: {movie.vote_average}</UserRating>
                  <StyledButton>+</StyledButton>
                  <MovieTitleH3>{movie.original_title}</MovieTitleH3>
                  <ReleaseDate>Release-Date: {movie.release_date}</ReleaseDate>
                  <Overview>Overview: {movie.overview}</Overview>
                </CardBody>
              ) : (
                <></>
              )}
            </>
          </MovieListItem>
        ))}
      </MovieList>
    </>
  );
}

const MovieList = styled.ul`
  list-style-type: none;
  max-width: 450px;
  padding-left: 0;
`;

const CardBody = styled.div`
  padding: 16px;
`;

const CardImage = styled.img`
  box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.45);
  display: block;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
`;
const MovieListItem = styled.li`
  border-radius: 10px;
  margin-bottom: 75px;
`;

const MovieTitleH3 = styled.h3`
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 0;
`;

const UserRating = styled.p`
  margin-top: -2rem;
  margin-bottom: 1rem;
  position: relative;
  max-width: 10rem;
  width: max-content;
  z-index: 10;
  background: #000000;
  color: #ffffff;
  font-size: 12px;
  margin-left: auto;
  border-radius: 99rem;
  padding: 8px 12px;
  margin-bottom: 0;
`;

const StyledButton = styled.button`
  margin-top: -2.5rem;
  margin-bottom: 1rem;
  font-size: 2rem;
  color: white;
  background: black;
  border: transparent;
  position: absolute;
  width: max-content;
  margin-right: auto;
  z-index: 10;
  cursor: pointer;
  border-radius: 99rem;
  padding: 1px 20px 8px 20px;
`;

const ReleaseDate = styled.p`
  list-style-type: none;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 12px;
  margin-bottom: 0;
`;

const Overview = styled.p`
  list-style-type: none;
  margin-top: 6px;
  color: rgba(0, 0, 0, 0.6);
`;
