import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif;
    background: #f4f5f8;
    color: #0f172a;
  }
  a { text-decoration: none; color: inherit; }
`;

export const AppShell = styled.div`
  min-height: 100vh;
  background: #f4f5f8;
`;

export const TopBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 16px 32px;
  background: #0c0d11;
  color: #fff;
  box-shadow: 0 6px 20px rgba(0,0,0,0.25);
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.1px;
`;

export const LogoMark = styled.div`
  width: 32px;
  height: 22px;
  border: 2px solid #fff;
  border-radius: 6px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    border-radius: 3px;
    border: 2px solid #fff;
    transform: translate(-50%, -50%);
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
