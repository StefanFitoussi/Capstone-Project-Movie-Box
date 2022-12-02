import styled from "styled-components";
import MovieList from "../components/MovieList";

export default function Home({ movies, onToggleBookmark, bookmarks }) {
  return (
    <>
      <StyledChoice1>Choose you Style</StyledChoice1>
      <StyledCategory>
        <StyledList>popular</StyledList>
        <StyledList>top-rated</StyledList>
        <StyledList>upcoming</StyledList>
        <StyledList>latest</StyledList>
      </StyledCategory>
      <StyledChoice2>Choose your Movies</StyledChoice2>
      <MovieList
        movies={movies}
        onToggleBookmark={onToggleBookmark}
        bookmarks={bookmarks}
      />
    </>
  );
}

const StyledChoice1 = styled.p`
  text-align: center;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  margin: 4.9rem 0 -0.7rem 0;
`;

const StyledCategory = styled.p`
  display: flex;
  list-style-type: none;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledList = styled.button`
  box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.45);
  font-size: 13.5px;
  font-weight: bold;
  color: orange;
  background: black;
  border: outset;
  border-radius: 99rem;
  padding: 0.5rem 0.5em 0.5rem 0.5em;
  cursor: pointer;
`;

const StyledChoice2 = styled.p`
  text-align: center;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  margin: 2.2rem 0 1rem 0;
`;
