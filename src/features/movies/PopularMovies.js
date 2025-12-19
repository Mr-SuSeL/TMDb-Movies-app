// src/features/movies/PopularMovies.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MovieCard from "./components/MovieCard";
import { MoviesGrid } from "./components/MoviesGrid/styled";
import { Pagination } from "../../common/Pagination";
import { fetchPopularMoviesRequest } from "../../store/slices/moviesSlice";

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
    <>
      <MoviesGrid>
        {popularMovies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </MoviesGrid>
      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default PopularMovies;
