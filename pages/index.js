import styled from "styled-components";
import MovieList from "../components/MovieList";
import { useEffect, useState } from "react";

export default function Home({ movies, onToggleBookmark, bookmarks }) {
  const [listType, setListType] = useState("popular");
  const [displayedMovies, setDisplayedMovies] = useState(movies);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const fetchMovies = async () => {
    try {
      setLoading(true);
      console.log(process.env.KEY);
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${listType}?api_key=${process.env.KEY}`
      );

      // c02216a131e954f6cb9dc96daec0b215

      setLoading(false);

      const data = await response.json();

      if (listType === "latest") {
        setDisplayedMovies([data]);
        return;
      }

      setDisplayedMovies(data.results);
    } catch (error) {
      setError("An error occured: " + error);
    }
  };

  useEffect(() => {
    if (listType === "popular") {
      setDisplayedMovies(movies);
    }

    fetchMovies();
  }, [listType]);

  return (
    <>
      <StyledChoice1>Choose your Style</StyledChoice1>
      <StyledCategory>
        <StyledList
          active={listType === "popular" ? 1 : 0}
          onClick={() => setListType("popular")}
        >
          popular
        </StyledList>
        <StyledList
          active={listType === "upcoming" ? 1 : 0}
          onClick={() => setListType("upcoming")}
        >
          upcoming
        </StyledList>
        <StyledList
          active={listType === "now_playing" ? 1 : 0}
          onClick={() => setListType("now_playing")}
        >
          playing
        </StyledList>
      </StyledCategory>
      <StyledChoice2>Choose your Movies</StyledChoice2>

      {error && <p>{error}</p>}

      {displayedMovies && (
        <MovieList
          movies={displayedMovies}
          onToggleBookmark={onToggleBookmark}
          bookmarks={bookmarks}
        />
      )}
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
  font-size: 1rem;
  font-weight: bold;
  color: #ffa500;
  background: #000000;
  border: 4px outset #000000;
  border-radius: 99rem;
  padding: 0.7em 0.55em 0.9em 0.55em;
  cursor: pointer;
  text-decoration: none;

  ${({ active }) =>
    active &&
    `
    border: 4px inset #ffa500;
`}
`;

const StyledChoice2 = styled.p`
  text-align: center;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  margin: 3rem 0 1.1rem 0;
`;

const StyledLoading = styled.p`
  font-size: 1rem;
  font-weight: bold;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  text-align: center;
`;
