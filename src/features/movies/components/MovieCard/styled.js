import styled from "styled-components";

export const MovieCardContainer = styled.article`
  background-color: ${({ theme }) => theme.cardBg};
  padding: 16px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.2s ease;
  
  box-shadow: ${({ theme }) => 
    theme.cardBg.toLowerCase() === "#ffffff" 
      ? "0px 4px 12px rgba(186, 199, 213, 0.5)" 
      : "0px 4px 12px rgba(0, 0, 0, 0.5)"};
  
  border: none;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobileMax || "767px"}) {
    flex-direction: row;
    gap: 16px;
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
  aspect-ratio: 292 / 434;
  border-radius: 5px;
  object-fit: cover;
  background-color: ${({ theme }) => theme.color?.divider || "#E4E6F0"};

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobileMax || "767px"}) {
    width: 114px;
    height: auto;
  }
`;

export const MovieInfo = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobileMax || "767px"}) {
    margin-top: 0;
  }
`;

export const MovieTitle = styled.h3`
  font-size: 22px;
  font-weight: 500;
  margin: 0 0 8px 0;
  line-height: 1.3;
  color: ${({ theme }) => theme.text};

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobileMax || "767px"}) {
    font-size: 16px;
    margin-bottom: 4px;
  }
`;

export const MovieYear = styled.p`
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.color?.darkerGrey || "#7E839A"};

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobileMax || "767px"}) {
    font-size: 13px;
    margin-bottom: 8px;
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

export const Tag = styled.span`
  /* Zastosowałem .toLowerCase(), aby uniknąć problemów z wielkością liter w HEX */
  background-color: ${({ theme }) => 
    theme.cardBg.toLowerCase() === "#ffffff" 
      ? "#E4E6F0" 
      : "#444444"}; 
  
  color: ${({ theme }) => 
    theme.cardBg.toLowerCase() === "#ffffff" 
      ? "#18181B" 
      : "#FFFFFF"};
      
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.1;

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobileMax || "767px"}) {
    padding: 4px 8px;
    font-size: 10px;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: auto; 
  padding-top: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobileMax || "767px"}) {
    margin-top: 8px;
  }
`;

export const Star = styled.div`
  width: 24px;
  height: 24px;
  color: #FCD12A;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobileMax || "767px"}) {
    width: 16px;
    height: 16px;
  }
  
  svg { width: 100%; height: auto; }
`;

export const Rate = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.text};

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobileMax || "767px"}) {
    font-size: 13px;
  }
`;

export const Votes = styled.span`
  color: ${({ theme }) => theme.color?.darkerGrey || "#7E839A"};
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobileMax || "767px"}) {
    font-size: 13px;
  }
`;