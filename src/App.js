import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from './features/movies/components/MovieCard';
import { fetchPopularMovies } from './store/slices/moviesSlice';
import { AppContainer, AppHeader, AppLink } from './styledGlobals';

function App() {
  const dispatch = useDispatch();  // DODAJ!
  const { popularMovies, loading, error } = useSelector(state => state.movies);  // POPRAWKA!

  useEffect(() => {
    dispatch(fetchPopularMovies());  // ŁADUJE FILMY!
  }, [dispatch]);

  if (loading) return (
    <AppContainer>
      <AppHeader>
        <h1>TMDb Movies App</h1>
        <p>Projekt grupowy - YouCode</p>
        <p>Ładowanie popularnych filmów...</p>
      </AppHeader>
    </AppContainer>
  );

  return (
    <AppContainer>
      <AppHeader>
        <h1>TMDb Movies App</h1>
        <p>Projekt grupowy - YouCode</p>
        
        {error ? (
          <p style={{ color: 'red' }}>Błąd: {error}</p>
        ) : popularMovies.length > 0 ? (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
            gap: '20px', 
            marginTop: '2rem', 
            padding: '2rem' 
          }}>
            {popularMovies.slice(0, 8).map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <p>Popularne filmy wkrótce...</p>
        )}
        
        <AppLink href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
          Powered by TMDB API
        </AppLink>
      </AppHeader>
    </AppContainer>
  );
}

export default App;
