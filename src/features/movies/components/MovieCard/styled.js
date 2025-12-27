import styled from "styled-components";

export const MovieCardContainer = styled.article`
  background-color: ${({ theme }) => theme.cardBg || "#ffffff"};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  height: 100%;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(15, 23, 42, 0.14);
  }
`;

export const MoviePoster = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 3;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const MovieOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(15, 23, 42, 0) 40%,
    rgba(15, 23, 42, 0.55) 100%
  ); 
  opacity: 0;
  transition: opacity 0.2s ease;

  ${MovieCardContainer}:hover & {
    opacity: 1;
  }
`;

export const MovieInfo = styled.div`
  padding: 16px 16px 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const MovieTitle = styled.h3`
  font-size: 1rem;
  margin: 0;
  font-weight: 600;
  color: ${({ theme }) => theme.text || "#111827"};
`;

export const MovieYear = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.mutedText || "#6b7280"};
`;
