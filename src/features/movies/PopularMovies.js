// src/features/movies/PopularMovies.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./components/MovieCard";
import { MoviesGrid, MovieTileLink } from "./components/MoviesGrid/styled";
import { Pagination } from "../../common/Pagination";
import { fetchPopularMoviesRequest } from "../../store/slices/moviesSlice";
import { Page } from "./styled";

function PopularMovies() {
  const dispatch = useDispatch();
  const { popularMovies, loading, error, page, totalPages } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    dispatch(fetchPopularMoviesRequest({ page }));
  }, [dispatch, page]);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    dispatch(fetchPopularMoviesRequest({ page: newPage }));
  };

  if (loading) return <p>Ładowanie popularnych filmów...</p>;
  if (error) return <p>Błąd: {error}</p>;

  return (
    <Page>
      <MoviesGrid>
        {popularMovies.map((movie) => (
          <MovieTileLink key={movie.id} to={`/movie/${movie.id}`}>
            <MovieCard movie={movie} />
          </MovieTileLink>
        ))}
      </MoviesGrid>

      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Page>
  );
}

export default PopularMovies;
