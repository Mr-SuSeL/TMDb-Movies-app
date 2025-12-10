import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, ::after, ::before {
    box-sizing: inherit;
  }
  body {
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.color.lightGray};
    color: ${({ theme }) => theme.color.black};
  }
`;

export const AppContainer = styled.div`
  padding: 0;
  margin: 0;
  min-height: 100vh;
`; 