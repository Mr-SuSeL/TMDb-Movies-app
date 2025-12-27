import styled from "styled-components";

export const MovieCardContainer = styled.article`
  background-color: ${({ theme }) => theme.color.white};
  padding: 16px;
  border-radius: 5px;
  box-shadow: 0 4px 12px rgba(186, 199, 213, 0.5);
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: row;
    gap: 16px;
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
  aspect-ratio: 2 / 3;
  border-radius: 5px;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 114px;
    height: 169px;
  }
`;

export const MovieInfo = styled.div`
  margin-top: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 0;
  }
`;

export const MovieTitle = styled.h3`
  font-size: 22px;
  font-weight: 500;
  margin: 0;
  line-height: 1.3;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
  }
`;

export const MovieYear = styled.p`
  margin: 8px 0;
  font-size: 16px;
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
    margin: 4px 0;
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 4px 0;
  }
`;

export const Tag = styled.span`
  background: ${({ theme }) => theme.color.mystic || "#E4E6F0"}; /* Dodany kolor zapasowy */
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 14px;
  line-height: 1;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 8px;
    padding-top: 8px;
  }
`;

export const Star = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.candlelight};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 16px;
    height: 16px;
  }

  svg {
      width: 100%;
      height: auto;
  }
`;

export const Rate = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
  }
`;

export const Votes = styled.span`
  color: ${({ theme }) => theme.color.waterloo};
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
  }
`;