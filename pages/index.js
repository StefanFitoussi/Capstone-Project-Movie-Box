import styled from "styled-components";
import MovieList from "../components/MovieList";

export default function Home({ movies, onToggleBookmark, bookmarks }) {
  return (
    <>
      <StyledH2>Choose your Movies:</StyledH2>
      <MovieList
        movies={movies}
        onToggleBookmark={onToggleBookmark}
        bookmarks={bookmarks}
      />
    </>
  );
}

const StyledH2 = styled.h2`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  letter-spacing: 0.5px;
  padding-top: 5.5rem;
`;
