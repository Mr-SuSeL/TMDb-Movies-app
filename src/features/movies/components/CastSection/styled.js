import styled from "styled-components";

export const Section = styled.section`
  margin-top: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 21px;
  }
`;

export const SectionTitle = styled.h2`
  margin: 0 0 32px;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  color: ${({ theme }) => theme.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 20px;
    margin-bottom: 12px;
  }
`;

export const PeopleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(136px, 1fr));
    gap: 16px;
  }
`;

export const PersonCard = styled.article`
  background-color: ${({ theme }) => theme.cardBg};
  padding: 16px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: ${({ theme }) => 
    theme.cardBg === "#ffffff" 
      ? "0px 4px 12px rgba(186, 199, 213, 0.5)" 
      : "0px 4px 12px rgba(0, 0, 0, 0.5)"};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 8px;
  }
`;

export const PersonPhoto = styled.div`
  width: 100%;
  aspect-ratio: 177 / 264;
  background-color: ${({ theme }) => theme.color.divider};
  border-radius: 5px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const PersonInfo = styled.div`
  padding: 12px 0 0;
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
`;

export const PersonName = styled.p`
  margin: 0;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  color: ${({ theme }) => theme.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 14px;
  }
`;

export const PersonRole = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.darkerGrey};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 13px;
  }
`;