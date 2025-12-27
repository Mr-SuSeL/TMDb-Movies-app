import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  column-gap: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    column-gap: 12px;
  }

  @media (max-width: 320px) {
    column-gap: 8px;
  }
`;

export const NavLinkItem = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 48px;
  padding: 0 24px;
  
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 46px;
  text-transform: uppercase;
  
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;

  border-radius: 24px;
  border: 1px solid transparent;

  white-space: nowrap;
  min-width: 0;
  
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }

  &.active {
    border-color: ${({ theme }) => theme.color.white};
    cursor: default;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 34px;
    padding: 8px 12px;
    font-size: 12px;
    line-height: 32px;
  }

  @media (max-width: 320px) {
    height: 34px;
    padding: 8px 10px;
    font-size: 12px;
    line-height: 32px;
  }
`;