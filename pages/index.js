import styled from "styled-components";
import MovieList from "../components/MovieList";

export default function Home({
  movies,
  onToggleBookmark,
  bookmarks,
  listType,
  onUpdateMovieListType,
}) {
  return (
    <>
      <StyledChoice1>Choose your Style</StyledChoice1>
      <StyledCategory>
        <StyledList
          active={listType === "top_rated" ? 1 : 0}
          onClick={() => onUpdateMovieListType("top_rated")}
        >
          top-rated
        </StyledList>
        <StyledList
          active={listType === "popular" ? 1 : 0}
          onClick={() => onUpdateMovieListType("popular")}
        >
          popular
        </StyledList>
        <StyledList
          active={listType === "upcoming" ? 1 : 0}
          onClick={() => onUpdateMovieListType("upcoming")}
        >
          upcoming
        </StyledList>
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
  margin: 5.2rem 0 -0.6rem 0;
`;

const StyledCategory = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledList = styled.button`
  box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.45);
  font-size: 0.95rem;
  font-weight: bold;
  color: #ffa500;
  background: #000000;
  border: 5px outset #000000;
  border-radius: 99rem;
  padding: 0.7em 0.55em 0.9em 0.55em;
  cursor: pointer;
  text-decoration: none;
  ${({ active }) =>
    active &&
    `
    border: 5px inset #ffa500;
`}
`;

const StyledChoice2 = styled.p`
  text-align: center;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  margin: 3rem 0 1.1rem 0;
`;
