import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { AppContainer, GlobalStyle } from "./styledGlobals";
import { Header } from "./common/Navigation/Header";
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
        <Header />
        <PageContainer>
          <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
          <PopularMovies />
        </PageContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;