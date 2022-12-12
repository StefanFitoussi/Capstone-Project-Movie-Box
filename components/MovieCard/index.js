import styled from "styled-components";
import { useState } from "react";

export default function MovieCard({ movie, onToggleBookmark, bookmarks }) {
  const [isDetailShown, setIsDetailShown] = useState(false);

  if (!movie) {
    return (
      <>
        <StyledH2>No movie data...</StyledH2>
      </>
    );
  }

  return (
    <MovieListItem>
      <CardImage
        onClick={() =>
          setIsDetailShown((previousIsDetailShown) => !previousIsDetailShown)
        }
        src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
        alt="movie poster"
      ></CardImage>
      <>
        <UserRating>User-Rating: {movie.vote_average}</UserRating>
        <StyledBookmark onClick={() => onToggleBookmark(movie.id)}>
          {bookmarks.find((bookmark) => bookmark.id === movie.id)
            ? "REMOVE"
            : "ADD"}
        </StyledBookmark>
        {isDetailShown ? (
          <CardBody>
            <MovieTitleH3>{movie.original_title}</MovieTitleH3>
            <ReleaseDate>Release-Date: {movie.release_date}</ReleaseDate>
            <Overview>Overview: {movie.overview}</Overview>
          </CardBody>
        ) : (
          <></>
        )}
      </>
    </MovieListItem>
  );
}

const StyledH2 = styled.h2`
  padding-top: 5rem;
  text-align: left;
`;

const CardBody = styled.div`
  padding: 1rem;
  margin-top: -1.2rem;
`;

const CardImage = styled.img`
  box-shadow: 0 2px 6px 2px rgba(0.5, 0.5, 0.5, 0.95);
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
`;
const MovieListItem = styled.li`
  border-radius: 10px;
  margin: -0.6rem 0 7rem 0;
`;

const MovieTitleH3 = styled.h3`
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 0;
`;

const UserRating = styled.p`
  box-shadow: 0 2px 6px 2px rgba(0.5, 0.5, 0.5, 0.95);
  margin: -1.3rem 1rem 0 0;
  position: relative;
  width: max-content;
  z-index: 10;
  background: #000000;
  color: #ffa500;
  font-size: 12px;
  font-weight: bold;
  margin-left: auto;
  border-radius: 99rem;
  padding: 8px 12px;
  margin-bottom: 0;
  letter-spacing: 0.5px;
`;

const StyledBookmark = styled.button`
  box-shadow: 0 2px 6px 2px rgba(0.5, 0.5, 0.5, 0.95);
  margin: -2.2rem 0 0 1rem;
  color: #ffa500;
  font-size: 12px;
  font-weight: bold;
  background: #000000;
  position: absolute;
  width: max-content;
  margin-right: auto;
  z-index: 10;
  cursor: pointer;
  border: 3px outset #000000;
  border-radius: 99rem;
  padding: 8px 25px;
  letter-spacing: 0.5px;
  ${({ active }) =>
    active &&
    `
  border: 3px inset #ffa500;
`}
`;

const ReleaseDate = styled.p`
  list-style-type: none;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 12px;
  margin-bottom: 0;
`;

const Overview = styled.p`
  list-style-type: none;
  margin-top: 6px;
  color: rgba(0, 0, 0, 0.6);
`;
