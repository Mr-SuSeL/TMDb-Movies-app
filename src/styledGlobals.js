import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    text-size-adjust: 100%;
    min-height: 100%;
    scroll-behavior: smooth;
  }

  *, *::before, *::after {
    box-sizing: inherit;
    font-family: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background: rgb(245, 245, 250);
    color: rgb(24, 24, 27);
    font-family: "Poppins", sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const AppContainer = styled.div`
  min-height: 100vh;
  background: rgb(245, 245, 250);
  color: rgb(24, 24, 27);
`;
