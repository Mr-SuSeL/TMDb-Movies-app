import styled from 'styled-components';

export const MovieCardContainer = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background-color: #1a1a1a;
  transition: transform 0.2s;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const MoviePoster = styled.div`
  position: relative;
  aspect-ratio: 2/3;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const MovieOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.8)
  );
  opacity: 0;
  transition: opacity 0.2s;

  ${MovieCardContainer}:hover & {
    opacity: 1;
  }
`;

export const MovieInfo = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const MovieTitle = styled.h3`
  font-size: 1rem;
  margin: 0;
  color: white;
`;

export const MovieYear = styled.p`
  color: #999;
  font-size: 0.9rem;
  margin: 0;
`;
