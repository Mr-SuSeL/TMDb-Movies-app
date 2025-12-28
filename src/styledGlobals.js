import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
    font-family: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    /* Zmiana: tło i tekst reagują na motyw */
    background-color: ${({ theme }) => theme.background || "#F5F5FA"};
    color: ${({ theme }) => theme.text || "#111827"};
    font-family: "Poppins", sans-serif;
    transition: background-color 0.3s ease;
  }
`;

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background || "#F5F5FA"};
  color: ${({ theme }) => theme.text || "#111827"};
`;

export const AppHeader = styled.header`
  max-width: 1368px;
  margin: 0 auto;
  padding: 24px 16px 40px;
`;

export const PageContainer = styled.main`
  max-width: 1368px;
  margin: 0 auto;
  padding: 32px 24px 48px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 32px;
  color: ${({ theme }) => theme.text || "#0b1324"};
  letter-spacing: -0.5px;
`;

// Pozostałe style z bezpiecznymi fallbackami
export const SubtleText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color?.darkerGrey || "#6b7280"};
  font-size: 14px;
`;

/* Naprawiony SearchBox dla trybu ciemnego */
export const SearchBox = styled.div`
  margin-left: auto;
  flex: 1;
  max-width: 460px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  background: ${({ theme }) => theme.cardBg || "#ffffff"};
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.color?.divider || "rgba(0,0,0,0.1)"};
`;

export const ThemeSwitcherButton = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  padding: 12px 24px;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.color?.divider || "rgba(0,0,0,0.1)"};
  background: ${({ theme }) => theme.cardBg || "#ffffff"};
  color: ${({ theme }) => theme.text || "#18181B"};
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(0.9);
  }

  &:active {
    transform: translateY(0);
  }
`;