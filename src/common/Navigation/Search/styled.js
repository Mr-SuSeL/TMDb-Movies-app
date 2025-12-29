import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 432px;
  height: 48px;
  /* Zmiana: tło wyszukiwarki dopasowane do motywu (białe w dzień, ciemne w nocy) */
  background: ${({ theme }) => theme.cardBg || "#ffffff"};
  /* Zmiana: używamy dividera z motywu, z bezpiecznym fallbackiem */
  border: 1px solid ${({ theme }) => theme.color?.divider || "#E4E6F0"};
  border-radius: 33px;
  padding: 0 24px;
  gap: 16px;
  justify-self: end;

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || "767px"}) {
    grid-column: 1 / -1;
    width: 95%;
    height: 38px;
    margin: 12px auto;
    justify-self: center;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  /* Zmiana: kolor tekstu wpisywanego dopasowany do motywu */
  background: transparent;
  color: ${({ theme }) => theme.text || "#18181B"};

  &::placeholder {
    /* Placeholder może zostać szary */
    color: ${({ theme }) => theme.color?.darkerGrey || "#7E839A"};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || "767px"}) {
    font-size: 13px;
  }
`;

export const SearchIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Ikona lupy też powinna reagować na kolor tekstu */
  color: ${({ theme }) => theme.color?.darkerGrey || "#7E839A"};

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || "767px"}) {
    width: 16px;
    height: 16px;
  }
  
  svg {
    width: 100%;
    height: auto;
  }
`;