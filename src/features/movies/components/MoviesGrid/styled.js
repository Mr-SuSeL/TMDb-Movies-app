import styled from 'styled-components';

export const MoviesGrid = styled.div`
  display: grid;
  gap: 24px;
  padding: 32px 16px;
  max-width: 1200px;
  margin: 0 auto;

  /* Mobile: 1 kafelek */
  grid-template-columns: 1fr;

  /* >= 600px: 2 kafelki */
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* >= 900px: 3 kafelki */
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* >= 1200px: 4 kafelki */
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
