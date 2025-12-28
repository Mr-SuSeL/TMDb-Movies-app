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
  background-color: #ffffff;
  color: #111827;
  font-family: "Poppins", sans-serif;
}

`;

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  color: #111827;
`;

export const AppHeader = styled.header`
  max-width: 1040px;
  margin: 0 auto;
  padding: 24px 16px 40px;
`;

export const AppLink = styled.a`
  color: #3b82f6;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Tabs = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const TabButton = styled.div`
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid ${({ active }) => active ? '#ffffff' : 'rgba(255,255,255,0.25)'};
  background: ${({ active }) => active ? '#ffffff' : 'transparent'};
  color: ${({ active }) => active ? '#0c0d11' : '#ffffff'};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #ffffff;
    color: ${({ active }) => active ? '#0c0d11' : '#ffffff'};
  }
`;

export const SearchBox = styled.div`
  margin-left: auto;
  flex: 1;
  max-width: 460px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  background: #f7f8fb;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.18);
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.08);
`;

export const SearchIcon = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #9ca3af;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 8px;
    background: #9ca3af;
    bottom: -7px;
    right: -5px;
    transform: rotate(-45deg);
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-size: 15px;
  color: #0f172a;

  &::placeholder {
    color: #9ca3af;
  }
`;

export const PageContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 24px 48px;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 32px;
  color: #0b1324;
  letter-spacing: -0.5px;
`;

export const SubtleText = styled.p`
  margin: 0;
  color: #6b7280;
  font-size: 14px;
`;
