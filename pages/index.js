import styled from "styled-components";
import PopularList from "../components/PopularList";

export default function Home({ movies, onToggleBookmark, bookmarks }) {
  return (
    <>
      <StyledH2>Choose your Movies:</StyledH2>
      <PopularList
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
