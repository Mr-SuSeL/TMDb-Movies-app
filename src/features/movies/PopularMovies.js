import React, { useEffect } from 'react';
import MovieCard from './components/MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies } from '../../store/slices/moviesSlice';

function PopularMovies() {
  const dispatch = useDispatch();
  const { popularMovies, loading, error } = useSelector(state => state.movies);

  useEffect(() => {
    console.log('Dispatch fetchPopularMovies');
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  console.log('Movies from Redux:', popularMovies);

  if (loading) return <p>Ładowanie...</p>;
  if (error) return <p>Błąd: {error}</p>;

  return (
    <div className="movies-grid">
      {popularMovies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default PopularMovies;
