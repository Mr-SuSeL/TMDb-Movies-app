import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.color.black};
  display: flex;
  justify-content: center;
`;

export const HeroImage = styled.div`
  width: 100%;
  max-width: 1368px;
  height: 770px;
  background-size: cover;
  background-position: center;
  position: relative;
  
  box-shadow: 
    inset 0 0 320px 140px ${({ theme }) => theme.color.black},
    inset 0 0 120px 40px ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 400px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    height: 210px;
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
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 56px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 12px;
    gap: 8px;
  }
`;

export const Title = styled.h1`
  font-size: 64px;
  font-weight: 600;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 24px;
  }
`;

export const RatingSection = styled.div`
  display: flex;
  flex-direction: column; // Układ pionowy: Górny rząd to ocena, dolny to głosy
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row; // Na tablecie/mobile w jednej linii
    align-items: center;
    gap: 8px;
  }
`;

export const ScoreSection = styled.div`
  display: flex;
  align-items: baseline; // Wyrównanie tekstu do dołu
  gap: 8px;
`;

export const StarIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #FCD34D; 
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 16px;
    height: 16px;
  }
`;

export const Score = styled.span`
  font-size: 30px;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 14px;
  }
`;

export const MaxScore = styled.span`
  font-size: 16px;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 10px;
  }
`;

export const Votes = styled.span`
  font-size: 16px;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 10px;
  }
`;