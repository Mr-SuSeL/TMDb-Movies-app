import React from 'react';
import { AppContainer, AppHeader, AppLink } from './styledGlobals';

function App() {
  return (
    <AppContainer>
      <AppHeader>
        <h1>TMDb Movies App</h1>
        <p>Projekt grupowy - YouCode</p>
        <p>Popularne filmy wkrótce...</p>
        <AppLink
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB API
        </AppLink>
      </AppHeader>
    </AppContainer>
  );
}

export default App;
