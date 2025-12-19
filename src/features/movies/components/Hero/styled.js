// src/features/movies/components/Hero/styled.js
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.black};
`;

export const Container = styled.div`
  max-width: 1368px;
  margin: 0 auto;
  padding: 0 40px 40px;
`;

export const HeroImage = styled.div`
  width: 100%;
  height: 430px;
  border-radius: 24px;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  box-shadow: inset 0 0 200px 80px rgba(0, 0, 0, 0.95);
`;
