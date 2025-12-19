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
  box-shadow:
    inset 0 0 320px 140px ${({ theme }) => theme.color.black},
    inset 0 0 120px 40px ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 260px;
    border-radius: 20px;
    box-shadow:
      inset 0 0 240px 100px ${({ theme }) => theme.color.black},
      inset 0 0 90px 30px ${({ theme }) => theme.color.black};
  }
`;

