import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { get } from "../utils/httpClient";

export function MoviesGrid() {
  //let movies = [];
  //const moviesState = useState([]);
  //const movies = moviesState[0];
  //const setMovies = moviesState[1];
  //const [movies, setMovies] = moviesState;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie")
      .then((data) => {
        setMovies(data.results);
        //movies = data.results;
        console.log(movies);
      });
  }, []);
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
