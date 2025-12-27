import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  column-gap: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
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
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  border: 1px solid transparent;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.white};
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
  }

  &.active {
    border-color: ${({ theme }) => theme.color.white};
    cursor: default;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 34px;
    padding: 0 12px;
    font-size: 12px;
    line-height: 32px;
  }
`;