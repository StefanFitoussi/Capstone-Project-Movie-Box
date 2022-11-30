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
        <StyledH3>No movies here yet...</StyledH3>
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

// const StyledDiv = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

const StyledH2 = styled.h2`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  letter-spacing: 0.5px;
  margin-top: 6.5rem;
  margin-bottom: 1.5rem;
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
