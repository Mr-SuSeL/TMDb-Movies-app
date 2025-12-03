// src/styledGlobals.js
import styled from 'styled-components';

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

export const AppHeader = styled.header`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px;
`;

export const AppLink = styled.a`
  color: #3b82f6;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
