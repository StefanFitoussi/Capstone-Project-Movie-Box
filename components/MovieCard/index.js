import styled from "styled-components";

export default function MovieCard({
  isOpen,
  movie,
  setActiveItem,
  index,
  onToggleBookmark,
  bookmarks,
}) {
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
        onClick={() => {
          if (isOpen) {
            setActiveItem(undefined);
            return;
          }
          setActiveItem(index);
        }}
        src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
      ></CardImage>
      <>
        {isOpen ? (
          <CardBody>
            <UserRating>User-Rating: {movie.vote_average}</UserRating>
            <StyledBookmark onClick={() => onToggleBookmark(movie.id)}>
              {bookmarks.includes(movie.id) ? "REMOVE" : "ADD"}
            </StyledBookmark>
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
  padding: 16px;
`;

const CardImage = styled.img`
  box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.45);
  d-isplay: block;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
`;
const MovieListItem = styled.li`
  border-radius: 10px;
  margin-bottom: 75px;
`;

const MovieTitleH3 = styled.h3`
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 0;
`;

const UserRating = styled.p`
  margin-top: -2.5rem;
  margin-bottom: 1rem;
  position: relative;
  max-width: 10rem;
  width: max-content;
  z-index: 10;
  background: black;
  color: orange;
  font-size: 12px;
  margin-left: auto;
  border-radius: 99rem;
  padding: 8px 12px;
  margin-bottom: 0;
`;

const StyledBookmark = styled.button`
  margin: -1.95rem 0 1rem 0;
  color: orange;
  background: black;
  border: transparent;
  position: absolute;
  width: max-content;
  margin-right: auto;
  z-index: 10;
  cursor: pointer;
  border-radius: 99rem;
  padding: 8px 25px;
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
