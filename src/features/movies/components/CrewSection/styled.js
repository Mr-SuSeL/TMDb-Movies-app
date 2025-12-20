// src/features/movies/components/CrewSection/styled.js
import styled from "styled-components";

export const Section = styled.section`
  margin-top: 40px;
`;

export const SectionTitle = styled.h2`
  margin: 0 0 16px;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

export const PeopleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 16px;
`;

export const PersonCard = styled.article`
  background-color: ${({ theme }) => theme.cardBg || "#ffffff"};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.08);
  display: flex;
  flex-direction: column;
`;

export const PersonPhoto = styled.div`
  width: 100%;
  aspect-ratio: 2 / 3;
  background-color: #e5e7eb;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const PersonInfo = styled.div`
  padding: 8px 10px 10px;
`;

export const PersonName = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

export const PersonRole = styled.p`
  margin: 2px 0 0;
  font-size: 12px;
  color: ${({ theme }) => theme.mutedText || "#6b7280"};
`;
