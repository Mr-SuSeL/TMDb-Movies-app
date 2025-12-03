// src/App.js
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import PopularMovies from './features/movies/PopularMovies';
import { AppContainer, AppHeader, AppLink } from './styledGlobals';
import { lightTheme, darkTheme } from './theme';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <AppContainer>
        <AppHeader>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1>TMDb Movies App</h1>
              <p>Projekt grupowy - YouCode</p>
            </div>

            <button
              onClick={toggleTheme}
              style={{
                padding: '8px 16px',
                borderRadius: '999px',
                border: '1px solid #9ca3af',
                backgroundColor: isDarkMode ? '#111827' : '#ffffff',
                color: isDarkMode ? '#f9fafb' : '#111827',
                cursor: 'pointer',
              }}
            >
              {isDarkMode ? 'Light mode' : 'Dark mode'}
            </button>
          </div>

          <PopularMovies />

          <AppLink
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by TMDB API
          </AppLink>
        </AppHeader>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
