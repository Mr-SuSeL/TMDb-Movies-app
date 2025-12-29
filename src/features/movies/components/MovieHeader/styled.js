import styled from "styled-components";

export const Wrapper = styled.article`
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  padding: 40px;
  /* Zmiana: Cień staje się bardzo delikatny i ciemny w trybie Dark Mode */
  box-shadow: ${({ theme }) => 
    theme.cardBg === "#ffffff" 
      ? "0px 4px 12px rgba(186, 199, 213, 0.5)" 
      : "0px 4px 12px rgba(0, 0, 0, 0.5)"};
  border: none;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 40px;
  margin-top: 64px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 16px;
    gap: 16px;
    margin-top: 16px;
  }
`;

export const Poster = styled.img`
  width: 312px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 114px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 8px;
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 36px;
  margin: 0;
  color: ${({ theme }) => theme.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 16px;
  }
`;

export const Year = styled.span`
  font-size: 22px;
  color: ${({ theme }) => theme.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 13px;
    color: ${({ theme }) => theme.color.darkerGrey};
  }
`;

export const InfoSection = styled.div`
  display: flex;
  gap: 10px;
  font-size: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 12px;
    flex-wrap: wrap;
    gap: 4px;
  }
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.color.darkerGrey};
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.text};
`;

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 8px;
  }
`;

export const Tag = styled.li`
  background: ${({ theme }) => theme.color.divider};
  color: ${({ theme }) => theme.text};
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 4px 8px;
    font-size: 10px;
  }
`;

export const RatingSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: nowrap;
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 8px;
  }
`;

export const StarIcon = styled.div`
  width: 24px;
  height: 24px;
  background-color: #FCD34D; 
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 16px;
    height: 16px;
  }
`;

export const Score = styled.span`
  font-weight: 500;
  font-size: 22px;
  color: ${({ theme }) => theme.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 13px;
    font-weight: 600;
  }
`;

export const MaxScore = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const Votes = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.cardBg === "#ffffff" ? theme.color.black : theme.color.darkerGrey};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 13px;
    color: ${({ theme }) => theme.color.darkerGrey};
  }
`;

export const Overview = styled.p`
  font-size: 20px;
  line-height: 1.6;
  margin: 0;
  color: ${({ theme }) => theme.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 14px;
    grid-column: span 2;
  }
`;