import { useState } from "react";
import MovieCard from "../MovieCard";
import styled from "styled-components";

export default function MovieList({ movies, onToggleBookmark, bookmarks }) {
  const [activeItem, setActiveItem] = useState();

  return (
    <>
      <FilmList>
        {movies.map((movie, index) => (
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
      </FilmList>
    </>
  );
}

const FilmList = styled.ul`
  list-style-type: none;
  max-width: 450px;
  padding-left: 0;
`;
