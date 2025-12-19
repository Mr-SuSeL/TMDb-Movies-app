// src/App.js
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { AppContainer, GlobalStyle } from "./styledGlobals";
import Navigation from "./common/Navigation";
import PopularMovies from "./features/movies/PopularMovies";
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
          <PopularMovies />
        </PageContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
