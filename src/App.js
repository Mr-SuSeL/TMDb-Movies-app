import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { AppContainer, GlobalStyle } from "./styledGlobals";
import Navigation from "./common/Navigation";
import PopularMovies from "./features/movies/PopularMovies";
import MovieDetails from "./features/movies/MovieDetails";
import PopularPeople from "./features/people/PopularPeople";
import PersonDetails from "./features/people/PersonDetails";
import { PageContainer } from "./common/Layout/PageContainer";
import { lightTheme, darkTheme } from "./theme";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <AppContainer>
        <Navigation
          isDarkMode={isDarkMode}
          onToggleTheme={toggleTheme}
        />
        <PageContainer>
          <Routes>
            <Route path="/" element={<PopularMovies />} />
            <Route path="/movies" element={<PopularMovies />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/people" element={<PopularPeople />} />
            <Route path="/person/:id" element={<PersonDetails />} />
            <Route path="*" element={<PopularMovies />} /> 
          </Routes>
        </PageContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;