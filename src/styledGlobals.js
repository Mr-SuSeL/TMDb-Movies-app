// src/styledGlobals.js
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
    font-family: inherit;
  }

body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-family: "Poppins", sans-serif;
}

`;

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

export const AppHeader = styled.header`
  max-width: 1040px;
  margin: 0 auto;
  padding: 24px 16px 40px;
`;

export const AppLink = styled.a`
  color: #3b82f6;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
