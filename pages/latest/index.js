import GlobalStyles from "../components/GlobalStyles";
import { useLocalStorage } from "../helpers/hooks.js";
import { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard";

const API_URL_4 =
  "https://api.themoviedb.org/3/movie/latest?api_key=c02216a131e954f6cb9dc96daec0b215";
