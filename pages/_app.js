import GlobalStyles from "../components/GlobalStyles";
import Layout from "../components/Layout/Layout";
import { useLocalStorage } from "../helpers/hooks.js";
import { useState } from "react";
import useSWR from "swr";
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

function MyApp({ Component, pageProps }) {
  const [listType, setListType] = useState("popular");
  const [bookmarks, setBookmarks] = useLocalStorage("movieFavorites", []);

  const {
    data: movies,
    error,
    loading,
  } = useSWR(
    `https://api.themoviedb.org/3/movie/${listType}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    fetchMovies
  );

  async function fetchMovies(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  }

  function updateMovieListType(type) {
    setListType(type);
  }

  function toggleBookmark(id) {
    if (bookmarks.find((bookmark) => bookmark.id === id)) {
      setBookmarks((previousBookmarks) =>
        previousBookmarks.filter((bookmark) => bookmark.id !== id)
      );
    } else {
      const movieToBookmark = movies.find((movie) => movie.id === id);
      setBookmarks((previousBookmarks) => [
        ...previousBookmarks,
        movieToBookmark,
      ]);
    }
  }

  return (
    <>
      <GlobalStyles />
      <Layout>
        {movies && (
          <Component
            {...pageProps}
            movies={movies}
            bookmarks={bookmarks}
            onToggleBookmark={toggleBookmark}
            listType={listType}
            onUpdateMovieListType={updateMovieListType}
          />
        )}
      </Layout>
    </>
  );
}

export default MyApp;
