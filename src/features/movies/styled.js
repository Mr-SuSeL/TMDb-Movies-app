import styled from "styled-components";

export const Page = styled.main`
  max-width: 1368px;
  margin: 0 auto 80px;
  padding: 0 16px;
`;

export const HeroWrapper = styled.section`
  margin: 0 -16px 32px;
`;

export const HeroImage = styled.div`
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center;
  border-radius: 0 0 24px 24px;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 260px;
  }
`;

export const ContentSection = styled.section`
  background-color: ${({ theme }) => theme.cardBg || "#ffffff"};
  border-radius: 24px;
  padding: 24px;
  margin-top: -80px;
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.25);
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    margin-top: -40px;
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
