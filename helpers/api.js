const data = [
  {
    id: 1,
    original_title: "The Matrix",
    release_date: "1999-30-03",
    runtime: 136,
  },
  {
    id: 2,
    original_title: "Halloween",
    release_date: "1978-10-24",
    runtime: 92,
  },
  {
    id: 3,
    original_title: "The Thing",
    release_date: "1982-06-25",
    runtime: 109,
  },
];

function getAllMovies() {
  return data;
}

function getMovieById(movieId) {
  return data.find((movie) => {
    console.log(movie);
    return movie.id === movieId;
  });
}

function fetcher(url) {
  return fetch(url).then((res) => res.json());
}

export default data;
export { getAllMovies, getMovieById, fetcher };
