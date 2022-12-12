import MovieCard from "../MovieCard";
import styled from "styled-components";

export default function MovieList({ movies, onToggleBookmark, bookmarks }) {
  return (
    <>
      <FilmList>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onToggleBookmark={onToggleBookmark}
            bookmarks={bookmarks}
          ></MovieCard>
        ))}
      </FilmList>
    </>
  );
}

const FilmList = styled.ul`
  list-style-type: none;
  max-width: 450px;
  padding-left: 0;
`;
