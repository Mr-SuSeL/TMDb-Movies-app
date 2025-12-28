import styled from "styled-components";

export const Wrapper = styled.article`
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  padding: 40px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 40px;
  margin-top: 64px;

  /* Naprawa cienia: brak jasnego blasku w Dark Mode */
  box-shadow: ${({ theme }) => 
    theme.cardBg.toLowerCase() === "#ffffff" 
      ? "0px 4px 12px rgba(186, 199, 213, 0.5)" 
      : "0px 4px 12px rgba(0, 0, 0, 0.5)"};

  /* Naprawa bordera: całkowite usunięcie czarnej ramki w jasnym motywie */
  border: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet || "1024px"}) {
    padding: 16px;
    gap: 16px;
    margin-top: 16px;
  }
`;

export const Poster = styled.img`
  width: 312px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet || "1024px"}) {
    width: 114px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet || "1024px"}) {
    gap: 8px;
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 36px;
  margin: 0;
  color: ${({ theme }) => theme.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet || "1024px"}) {
    font-size: 16px;
  }
`;

export const Year = styled.span`
  font-size: 22px;
  color: ${({ theme }) => theme.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet || "1024px"}) {
    font-size: 13px;
    color: ${({ theme }) => theme.color?.darkerGrey || "#7E839A"};
  }
`;

export const InfoSection = styled.div`
  display: flex;
  gap: 10px;
  font-size: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet || "1024px"}) {
    font-size: 12px;
    flex-wrap: wrap;
    gap: 4px;
  }
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.color?.darkerGrey || "#7E839A"};
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet || "1024px"}) {
    gap: 8px;
  }
`;

export const Tag = styled.li`
  /* Naprawa: Dokładnie #E4E6F0 dla jasnego motywu */
  background: ${({ theme }) => 
    theme.cardBg.toLowerCase() === "#ffffff" 
      ? "#E4E6F0" 
      : "#444444"};
  
  /* Naprawa: Wymuszony ciemny tekst dla jasnego tła */
  color: ${({ theme }) => 
    theme.cardBg.toLowerCase() === "#ffffff" 
      ? "#18181B" 
      : "#FFFFFF"};
      
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet || "1024px"}) {
    padding: 4px 8px;
    font-size: 10px;
  }
`;

export const RatingSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet || "1024px"}) {
    gap: 8px;
  }
`;

export const StarIcon = styled.div`
  width: 24px;
  height: 24px;
  background-color: #FCD34D; 
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet || "1024px"}) {
    width: 16px;
    height: 16px;
  }
`;

export const Score = styled.span`
  font-weight: 500;
  font-size: 22px;
  color: ${({ theme }) => theme.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet || "1024px"}) {
    font-size: 13px;
    font-weight: 600;
  }
`;

export const MaxScore = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet || "1024px"}) {
    display: none;
  }
`;

export const Votes = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.color?.darkerGrey || "#7E839A"};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet || "1024px"}) {
    font-size: 13px;
  }
`;

export const Overview = styled.p`
  font-size: 20px;
  line-height: 1.6;
  margin: 0;
  color: ${({ theme }) => theme.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet || "1024px"}) {
    font-size: 14px;
    grid-column: span 2;
    margin-top: 16px;
  }
`;