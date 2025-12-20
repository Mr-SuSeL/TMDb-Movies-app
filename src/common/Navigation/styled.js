// src/common/Navigation/styled.js
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.black};
`;

export const Container = styled.div`
  max-width: 1368px;
  margin: 0 auto;
  padding: 0 40px;
  min-height: 94px;

  display: grid;
  grid-template-columns: auto 1fr auto auto;
  align-items: center;
  column-gap: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 16px;
    column-gap: 12px;
    row-gap: 12px;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto auto;
    grid-template-areas:
      "header menu toggle"
      "search search search";
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 8px;
  }
`;

/* Wrappery elementów */

export const HeaderWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-area: header;
  }
`;

export const MenuWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-area: menu;
  }
`;

export const SearchWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-area: search;
  }
`;

export const ThemeToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-area: toggle;
    justify-self: flex-end;
  }
`;
