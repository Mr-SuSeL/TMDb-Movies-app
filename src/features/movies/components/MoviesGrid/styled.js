import styled from 'styled-components';
import { Link } from "react-router-dom";

export const MoviesGrid = styled.div`
  display: grid;
  /* Kluczowe: 4 kolumny o identycznej szerokości (fractional unit) */
  grid-template-columns: repeat(4, 1fr); 
  gap: 24px;
  
  /* Centrowanie siatki i ograniczenie jej szerokości do standardu Figmy */
  max-width: 1368px;
  margin: 24px auto; 
  
  /* Wyrównanie wysokości wszystkich kafelków w rzędzie */
  align-items: stretch;

  /* Responsywność - zmiana liczby kolumn przy mniejszych ekranach */
  @media (max-width: 1380px) {
    padding: 0 16px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.tabletMax || "1024px"}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobileMax || "767px"}) {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 12px;
  }
`;

export const MovieTileLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  
  /* Musimy wymusić, by link był kontenerem flex i zajmował 100% wysokości komórki grida */
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%; /* To zapobiegnie zwężaniu się pojedynczych kafelków */

  &:hover {
    text-decoration: none;
  }
`;