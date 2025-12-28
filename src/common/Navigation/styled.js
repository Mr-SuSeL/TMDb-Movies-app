import styled from "styled-components";

export const Wrapper = styled.nav`
  width: 100%;
  /* Poprawka: Kolor ustawiony na czysty czarny, aby idealnie pasował do sekcji Hero */
  background-color: #000000; 
  /* Poprawka: Kolor tekstu na sztywno biały */
  color: #FFFFFF;
  padding: 23px 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobileMax || "767px"}) {
    padding: 16px;
  }
`;

export const Container = styled.div`
  max-width: 1368px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  column-gap: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobileMax || "767px"}) {
    grid-template-columns: 1fr;
    row-gap: 24px;
    justify-items: center;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobileMax || "767px"}) {
    gap: 12px;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-self: end; 

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobileMax || "767px"}) {
    width: 100%;
    justify-self: stretch;
  }
`;

export const ThemeToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12px;
`;