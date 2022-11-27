import { useState, useEffect } from "react";
import MovieCard from "../MovieCard";
import styled from "styled-components";
const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=c02216a131e954f6cb9dc96daec0b215";

export default function PopularList() {
  const [movies, setMovies] = useState([]);
  const [activeItem, setActiveItem] = useState();
  const [bookmarks, setBookmarks] = useState();

  useEffect(() => {
    // get api data
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });

    // get localstorage data
    const data = localStorage.getItem("movie-box-bookmarks");
    const bookmarkedMovies = JSON.parse(data);
    setBookmarks(bookmarkedMovies);
  }, []);

  return (
    <>
      <MovieList>
        {movies.map((movie, index) => (
          <MovieCard
            isOpen={activeItem === index}
            movie={movie}
            isActiveItem={index === activeItem}
            setActiveItem={setActiveItem}
            isBookmarked={bookmarks && movie.id in bookmarks}
            saveBookmarks={setBookmarks}
            index={index}
          ></MovieCard>
        ))}
      </MovieList>
    </>
  );
}

const MovieList = styled.ul`
  list-style-type: none;
  max-width: 450px;
  padding-left: 0;
`;
