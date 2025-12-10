// src/App.js
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { AppContainer, GlobalStyle } from "./GlobalStyle";
import { Header } from "./common/Navigation/Header";
import PopularMovies from "./features/movies/PopularMovies";
import { ThemeToggle } from "./common/ThemeToggle";
import { lightTheme, darkTheme } from "./theme";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
        <PopularMovies />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
