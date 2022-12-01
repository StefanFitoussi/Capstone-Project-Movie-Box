import styled from "styled-components";
import MovieList from "../components/MovieList";

export default function Home({ movies, onToggleBookmark, bookmarks }) {
  return (
    <>
      <StyledChoice1>Choose you Style:</StyledChoice1>
      <StyledCategory>
        <StyledList>popular</StyledList>
        <StyledList>top-rated</StyledList>
        <StyledList>upcoming</StyledList>
        <StyledList>latest</StyledList>
      </StyledCategory>
      <StyledChoice2>Choose your Movies:</StyledChoice2>
      <MovieList
        movies={movies}
        onToggleBookmark={onToggleBookmark}
        bookmarks={bookmarks}
      />
    </>
  );
}

const StyledChoice1 = styled.p`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  margin: 4.5rem 0 -0.5rem 0;
`;

const StyledCategory = styled.p`
  display: flex;
  list-style-type: none;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledList = styled.button`
  font-size: 15px;
  font-style: bold;
  color: orange;
  background: black;
  border-radius: 99rem;
  padding: 0.5rem 0.5em 0.5rem 0.5em;
`;

const StyledChoice2 = styled.p`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  margin: 2.4rem 0 1rem 0;
`;
