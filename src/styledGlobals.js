import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html, body, #root { height: 100%; margin: 0; }
  body { font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Arial; background: ${({ theme }) => theme.body || '#fff'}; color: ${({ theme }) => theme.text || '#000'}; }
`;

export const AppContainer = styled.div`
  text-align: center;
`;

export const AppHeader = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

export const AppLink = styled.a`
  color: #61dafb;
  text-decoration: none;

  &:hover { color: #21a8f0; }
`;

export default GlobalStyle;

