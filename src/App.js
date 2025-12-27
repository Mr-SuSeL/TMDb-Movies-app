import React from "react";
import { ThemeProvider } from "styled-components";
import { AppContainer, GlobalStyle } from "./GlobalStyle.js";
import Navigation from "./common/Navigation";
import PopularMovies from "./features/movies/PopularMovies";
import { PageContainer } from "./common/Layout/PageContainer";
import { lightTheme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <AppContainer>
        <Navigation />
        <PageContainer>
          <PopularMovies />
        </PageContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;