// src/features/movies/components/MovieHeader/styled.js
import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.cardBg || "#ffffff"};
  border-radius: 24px;
  padding: 24px;
  margin-top: 0;                         // było 24px
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.25);
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    margin-top: -24px;                  // lekkie “podjechanie” pod hero na mobile, opcjonalne
  }
`;


export const Poster = styled.img`
  width: 260px;
  border-radius: 16px;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 180px;
    justify-self: center;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

export const Meta = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.mutedText || "#6b7280"};
`;

export const Overview = styled.p`
  margin-top: 12px;
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
`;
