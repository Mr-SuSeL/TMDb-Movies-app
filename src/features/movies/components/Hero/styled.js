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
  
  /* Efekt winiety/cienia zgodny z Twoim poprzednim kodem */
  box-shadow: 
    inset 0 0 320px 140px ${({ theme }) => theme.color.black},
    inset 0 0 120px 40px ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 400px;
    box-shadow: 
      inset 0 0 240px 100px ${({ theme }) => theme.color.black},
      inset 0 0 90px 30px ${({ theme }) => theme.color.black};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    height: 210px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  height: 100%;
  display: flex;
  align-items: flex-end;
`;

export const Content = styled.div`
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 56px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 24px;
    gap: 8px;
  }
`;

export const Title = styled.h1`
  font-size: 64px;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 24px;
  }
`;

export const RatingSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
  }
`;

export const ScoreSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StarIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: gold; 
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 16px;
    height: 16px;
  }
`;

export const Score = styled.span`
  font-size: 30px;
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 14px;
    font-weight: 600;
  }
`;

export const Votes = styled.span`
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 10px;
    color: ${({ theme }) => theme.color.darkerGrey};
  }
`;