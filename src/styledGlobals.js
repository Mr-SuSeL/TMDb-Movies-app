import styled from 'styled-components';

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
  color: #6178fbff;
  text-decoration: none;

  &:hover {
    color: #21a8f0;
  }
`;
