import { useState } from "react";
import styled from "styled-components";
import MovieCard from "../../components/MovieCard";

export default function WatchList({ movies, bookmarks, onToggleBookmark }) {
  const [activeItem, setActiveItem] = useState();
  const bookmarkedMovies = movies.filter((movie) =>
    bookmarks.includes(movie.id)
  );
  return (
    <>
      <StyledH2>Your Watchlist</StyledH2>
      {bookmarkedMovies.length === 0 ? (
        <StyledMessage>No movies here yet...</StyledMessage>
      ) : (
        <MovieList>
          {bookmarkedMovies.map((movie, index) => (
            <MovieCard
              key={movie.id}
              isOpen={activeItem === index}
              movie={movie}
              setActiveItem={setActiveItem}
              index={index}
              onToggleBookmark={onToggleBookmark}
              bookmarks={bookmarks}
            ></MovieCard>
          ))}
        </MovieList>
      )}
    </>
  );
}

const StyledH2 = styled.h2`
  text-align: center;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  letter-spacing: 0.5px;
  font-size: 1.5rem;
  margin-top: 5.3rem;
  margin-bottom: 1.2rem;
`;
const StyledMessage = styled.p`
  text-align: center;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  margin-top: 0;
`;
const MovieList = styled.ul`
  list-style: none;
  max-width: 450px;
  padding: 0;
`;
