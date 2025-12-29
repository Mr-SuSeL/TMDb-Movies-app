import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  column-gap: 40px;

  /* Zabezpieczenie: optional chaining i fallback do mobileMax */
  @media (max-width: ${({ theme }) => theme.breakpoints?.mobileMax || "767px"}) {
    column-gap: 16px;
  }
`;

export const NavLinkItem = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 0 24px;
  border-radius: 24px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 46px;
  text-transform: uppercase;
  /* Poprawka: Wymuszamy biały kolor, aby napisy były widoczne na czarnym tle */
  color: #FFFFFF;
  text-decoration: none;
  border: 1px solid transparent;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    /* Poprawka: Białe obramowanie na hover */
    border-color: #FFFFFF;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
  }

  &.active {
    /* Poprawka: Białe obramowanie dla aktywnego linku (zgodnie z makietą) */
    border-color: #FFFFFF;
    cursor: default;
  }

  /* Zabezpieczenie: optional chaining i fallback do mobileMax */
  @media (max-width: ${({ theme }) => theme.breakpoints?.mobileMax || "767px"}) {
    height: 34px;
    padding: 0 12px;
    font-size: 12px;
    line-height: 32px;
  }
`;