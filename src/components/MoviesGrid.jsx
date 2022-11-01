import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { get } from "../utils/httpClient";
import { Spinner } from "./Spinner";
import {useQuery} from "../hooks/useQuery";


export function MoviesGrid() {
  //let movies = [];
  //const moviesState = useState([]);
  //const movies = moviesState[0];
  //const setMovies = moviesState[1];
  //const [movies, setMovies] = moviesState;
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search ? "/search/movie?query=" + search : "/discover/movie";
    get(searchUrl)
      .then((data) => {
        setMovies(data.results);
        setIsLoading(false);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  if(isLoading){
    return <Spinner/>;
  }
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
