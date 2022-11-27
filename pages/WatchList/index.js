import { useEffect, useState } from "react";
import styled from "styled-components";
import MovieCard from "../../components/MovieCard";

export default function WatchList() {
  const [movies, setMovies] = useState();
  const [activeItem, setActiveItem] = useState();

  useEffect(() => {
    // get localstorage data
    const data = localStorage.getItem("movie-box-bookmarks");
    const bookmarkedMovies = JSON.parse(data);

    if (typeof bookmarkedMovies === "object") {
      console.log(bookmarkedMovies);
      const moviesArrays = Object.keys(bookmarkedMovies).map(
        (key) => bookmarkedMovies[key]
      );
      setMovies(moviesArrays);
    }
  }, []);

  const updateMovies = (bookmarks) => {
    const newState = Object.keys(bookmarks).map((key) => bookmarks[key]);

    setMovies(newState);
  };

  return (
    <>
      <StyledH2>My lovely movie list</StyledH2>
      <MovieList>
        {movies?.map((movie, index) => (
          <MovieCard
            isOpen={activeItem === index}
            movie={movie}
            isActiveItem={index === activeItem}
            setActiveItem={setActiveItem}
            isBookmarked={true}
            saveBookmarks={updateMovies}
            index={index}
          ></MovieCard>
        ))}
      </MovieList>
      {!movies ||
        (movies.length === 0 && <StyledH3>Sadly no movies here bruh</StyledH3>)}
    </>
  );
}

const StyledH2 = styled.h2`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  letter-spacing: 0.5px;
  margin-top: 0;
`;
const StyledH3 = styled.h3`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  letter-spacing: 0.5px;
  margin-top: 0;
`;
const MovieList = styled.ul`
  list-style-type: none;
  max-width: 450px;
  padding-left: 0;
`;
