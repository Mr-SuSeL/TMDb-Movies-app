import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  /* Wymuszamy czarny kolor niezależnie od motywu */
  background-color: #000000; 
  display: flex;
  justify-content: center;
`;

export const HeroImage = styled.div`
  width: 100%;
  max-width: 1368px;
  /* Proporcje wysokości względem szerokości są bezpieczniejsze niż sztywne px */
  aspect-ratio: 1368 / 770; 
  max-height: 770px;
  background-size: cover;
  background-position: center;
  position: relative;
  
  /* Cień wewnętrzny (vignette) musi być zawsze czarny */
  box-shadow: 
    inset 0 0 100px 80px #000000,
    inset 0 0 250px 180px #000000,
    inset 0 0 500px 250px #000000;

  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || "1024px"}) {
    aspect-ratio: auto;
    height: 400px;
    /* Mniejszy cień na mniejszych ekranach */
    box-shadow: 
      inset 0 0 60px 40px #000000,
      inset 0 0 120px 80px #000000;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobileMax || "767px"}) {
    height: 210px;
    box-shadow: 
      inset 0 0 30px 20px #000000,
      inset 0 0 60px 40px #000000;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1368px;
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding: 0 16px;
`;

export const Content = styled.div`
  /* Tekst na czarnym tle Hero zawsze musi być biały */
  color: #FFFFFF; 
  margin-bottom: 56px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || "1024px"}) {
    margin-bottom: 12px;
    gap: 8px;
  }
`;

export const Title = styled.h1`
  font-size: 64px;
  font-weight: 600;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || "1024px"}) {
    font-size: 24px;
  }
`;

export const RatingSection = styled.div`
  display: flex;
  flex-direction: column; // Układ pionowy: Górny rząd to ocena, dolny to liczba głosów
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || "1024px"}) {
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
`;

export const ScoreSection = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

export const StarIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #FCD34D; 
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);

  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || "1024px"}) {
    width: 16px;
    height: 16px;
  }
`;

export const Score = styled.span`
  font-size: 30px;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || "1024px"}) {
    font-size: 14px;
  }
`;

export const MaxScore = styled.span`
  font-size: 16px;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || "1024px"}) {
    font-size: 10px;
  }
`;

export const Votes = styled.span`
  font-size: 16px;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || "1024px"}) {
    font-size: 10px;
  }
`;