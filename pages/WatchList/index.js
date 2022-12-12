import { useState } from "react";
import styled from "styled-components";
import MovieList from "../../components/MovieList";

export default function WatchList({ bookmarks, onToggleBookmark }) {
  return (
    <>
      <StyledH2>Your Watchlist</StyledH2>
      {bookmarks.length === 0 ? (
        <StyledMessage>No movies here yet...</StyledMessage>
      ) : (
        <MovieList
          movies={bookmarks}
          onToggleBookmark={onToggleBookmark}
          bookmarks={bookmarks}
        />
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
