import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { AppContainer, GlobalStyle } from "./styledGlobals";
import Navigation from "./common/Navigation";
import PopularMovies from "./features/movies/PopularMovies";
import { ThemeToggle } from "./common/ThemeToggle";
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
        <Navigation />
        <PageContainer>
          <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
          <PopularMovies />
        </PageContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
