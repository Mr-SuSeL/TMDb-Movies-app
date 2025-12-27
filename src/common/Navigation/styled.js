import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.black};
`;

export const Container = styled.div`
  max-width: 1368px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto 1fr;
  align-items: center;
  column-gap: 48px;
  padding: 0 40px;
  min-height: 88px;
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: auto auto;
    row-gap: 12px;
    padding: 16px;
    min-height: unset;
  }

  @media (max-width: 320px) {
    grid-template-columns: auto auto;
    column-gap: 12px;
    row-gap: 8px;
    padding: 8px;
  }
`;

