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
  padding: 0 40px;
  min-height: 88px;

 @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: auto auto;
    row-gap: 12px;
    padding: 16px;
    min-height: unset;
  }
`;
