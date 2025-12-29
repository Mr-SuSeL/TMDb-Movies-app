import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { AppContainer, GlobalStyle, ThemeSwitcherButton } from "./styledGlobals"; // Poprawiony import
import Navigation from "./common/Navigation";
import PopularMovies from "./features/movies/PopularMovies";
import MovieDetails from "./features/movies/MovieDetails";
import PopularPeople from "./features/people/PopularPeople";
import PersonDetails from "./features/people/PersonDetails";
import { PageContainer } from "./common/Layout/PageContainer";

function App() {
  const [isDark, setIsDark] = useState(false); // Domyślnie jasny

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <AppContainer>
        <Navigation />
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
        
        <ThemeSwitcherButton onClick={toggleTheme}>
          {isDark ? "☀️ Tryb Jasny" : "🌙 Tryb Ciemny"}
        </ThemeSwitcherButton>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;