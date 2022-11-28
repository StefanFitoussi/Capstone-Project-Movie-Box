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
    <StyledDiv>
      <StyledH2>Your watchlist</StyledH2>
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
        (movies.length === 0 && <StyledH3>No movies here yet...</StyledH3>)}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledH2 = styled.h2`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  letter-spacing: 0.5px;
  margin-top: 6.5rem;
`;
const StyledH3 = styled.h3`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  letter-spacing: 0.5px;
  margin-top: 0;
`;
const MovieList = styled.ul`
  list-style: none;
  max-width: 450px;
  padding: 0;
`;
