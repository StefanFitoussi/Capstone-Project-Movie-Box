import styled from "styled-components";

export default function MovieCard(props) {
  const movie = props.movie;

  const index = props.index;
  const setActiveItem = props.setActiveItem;
  const isOpen = props.isOpen;
  const isBookmarked = props.isBookmarked;
  const saveBookmarks = props.saveBookmarks;

  if (!movie) {
    return (
      <>
        <br />
        <h2>No movie data?!!?</h2>
      </>
    );
  }

  const saveToLocalStorage = () => {
    const data = localStorage.getItem("movie-box-bookmarks");
    const bookmarkedMovies = data ? JSON.parse(data) : [];

    if (movie.id in bookmarkedMovies) {
      delete bookmarkedMovies[movie.id];

      localStorage.setItem(
        "movie-box-bookmarks",
        JSON.stringify(bookmarkedMovies)
      );

      saveBookmarks(bookmarkedMovies);
    } else {
      const bookmarksToSave = { ...bookmarkedMovies, [movie.id]: movie };
      localStorage.setItem(
        "movie-box-bookmarks",
        JSON.stringify(bookmarksToSave)
      );
      saveBookmarks(bookmarksToSave);
    }
  };

  return (
    <MovieListItem key={movie.id}>
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
            <StyledBookmark onClick={saveToLocalStorage}>
              {isBookmarked ? "-" : "+"}
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

const CardBody = styled.div`
  padding: 16px;
`;

const CardImage = styled.img`
  box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.45);
  display: block;
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
  margin-top: -2rem;
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
  margin: -2.5rem 0 1rem 0;
  font-size: 2rem;
  color: orange;
  background: black;
  border: transparent;
  position: absolute;
  width: max-content;
  margin-right: auto;
  z-index: 10;
  cursor: pointer;
  border-radius: 99rem;
  padding: 1px 20px 8px 20px;
`;

const StyledRemove = styled.button`
  margin-top: -2.5rem;
  margin-bottom: 1rem;
  font-size: 2rem;
  color: orange;
  background: white;
  border: transparent;
  position: absolute;
  width: max-content;
  margin-right: auto;
  z-index: 10;
  cursor: pointer;
  border-radius: 99rem;
  padding: 1px 20px 8px 20px;
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
