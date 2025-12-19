// src/styledGlobals.js
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.background};
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
      sans-serif;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    font-family: inherit;
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
