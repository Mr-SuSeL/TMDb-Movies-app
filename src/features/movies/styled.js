import styled from "styled-components";

export const Page = styled.main`
  max-width: 1368px;
  margin: 56px auto 103px; // Zmiana marginesów na zgodne z makietą
  padding: 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobileMax || "767px"}) {
    margin: 24px auto 40px;
  }
`;

export const Heading = styled.h2`
  font-family: Poppins;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  letter-spacing: 0px;
  vertical-align: middle;
`;
