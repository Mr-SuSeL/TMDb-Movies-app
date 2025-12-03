import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from './components/MovieCard';
import { MoviesGrid } from './components/MoviesGrid/styled';
import { fetchPopularMovies } from '../../store/slices/moviesSlice';

function PopularMovies() {
  const dispatch = useDispatch();
  const { popularMovies, loading, error } = useSelector(state => state.movies);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  if (loading) return <p>Ładowanie popularnych filmów...</p>;
  if (error) return <p>Błąd: {error}</p>;

  return (
    <MoviesGrid>
      {popularMovies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </MoviesGrid>
  );
}

export default PopularMovies;
