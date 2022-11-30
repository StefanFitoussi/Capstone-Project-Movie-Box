import GlobalStyles from "../components/GlobalStyles";
import Layout from "../components/Layout/Layout";
import { useLocalStorage } from "../helpers/hooks.js";
import { useState, useEffect } from "react";
const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=c02216a131e954f6cb9dc96daec0b215";

function MyApp({ Component, pageProps }) {
  const [movies, setMovies] = useState([]);
  const [bookmarks, setBookmarks] = useLocalStorage("movieFavorites", []);

  useEffect(() => {
    // get api data
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  function toggleBookmark(id) {
    if (bookmarks.includes(id)) {
      const updatedBookmarks = bookmarks.filter(
        (bookmarkId) => bookmarkId !== id
      );
      setBookmarks(updatedBookmarks);
    } else {
      const updatedBookmarks = [...bookmarks, id];
      setBookmarks(updatedBookmarks);
    }
  }

  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component
          {...pageProps}
          movies={movies}
          bookmarks={bookmarks}
          onToggleBookmark={toggleBookmark}
        />
      </Layout>
    </>
  );
}

export default MyApp;
