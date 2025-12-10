import React from "react";
import { ThemeProvider } from "styled-components";
import { AppContainer, GlobalStyle } from "./GlobalStyle.js";
import { Header } from "./common/Navigation/Header";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <GlobalStyle />
        <Header />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

