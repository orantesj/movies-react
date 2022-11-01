import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { get } from "../utils/httpClient";
import { Spinner } from "./Spinner";
import {useQuery} from "../hooks/useQuery";
import InfiniteScroll from "react-infinite-scroll-component";

export function MoviesGrid({ search }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search 
    ? "/search/movie?query=" + search + "&page=" + page
    : "/discover/movie?page=" + page;
    get(searchUrl)
      .then((data) => {
        setMovies((prevMovies) => prevMovies.concat(data.results));
        sethasMore(data.page < data.total_pages);
        setIsLoading(false);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, page]);


  return (
    <InfiniteScroll 
    dataLength={movies.length}
    hasMore={hasMore}
    next={() => setPage((prevPage) => prevPage + 1)}
    loader={<Spinner/>}
    >
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
