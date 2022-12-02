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
        <UserRating>User-Rating: {movie.vote_average}</UserRating>
        <StyledBookmark onClick={() => onToggleBookmark(movie.id)}>
          {bookmarks.includes(movie.id) ? "REMOVE" : "ADD"}
        </StyledBookmark>
        {isOpen ? (
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
  box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.45);
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
  box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.45);
  margin: -1.3rem 1rem 0 0;
  position: relative;
  width: max-content;
  z-index: 10;
  background: black;
  color: orange;
  font-size: 12px;
  margin-left: auto;
  border-radius: 8px;
  padding: 8px 12px;
  margin-bottom: 0;
  letter-spacing: 0.5px;
`;

const StyledBookmark = styled.button`
  box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.45);
  margin: -2.2rem 0 0 1rem;
  color: orange;
  font-size: 12px;
  background: black;
  position: absolute;
  width: max-content;
  margin-right: auto;
  z-index: 10;
  cursor: pointer;
  border: outset;
  border-radius: 8px;
  padding: 8px 25px;
  letter-spacing: 0.5px;
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
