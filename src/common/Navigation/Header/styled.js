// src/common/Navigation/Header/styled.js
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as WebsiteLogo } from "../../../assets/icon-video.svg";

export const StyledHeader = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background: ${({ theme }) => theme.color.black};
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  flex-wrap: wrap; /* pozwala elementom spaść do kolejnego rzędu */

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 20px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 12px auto 8px auto;
    justify-content: center;
  }
`;

export const Logo = styled(WebsiteLogo)`
  width: 40px;
  height: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 22.3px;
    height: 23.15px;
  }
`;

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: -1.5px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.color.white};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 23px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 8px auto;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 24px;
  height: 48px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 36.6px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.white};
  border-radius: 24px;
  border: 1px solid transparent;
  text-decoration: none;
  transition: 0.2s ease-in-out;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: ${({ theme }) => theme.color.white};
  }

  &.active {
    background: rgba(255, 255, 255, 0.1);
    border-color: ${({ theme }) => theme.color.white};
    cursor: default;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 8px 16px;
    font-size: 12px;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 432px;
  height: 48px;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.divider};
  border-radius: 33px;
  padding: 0 24px;
  margin-top: 23px;
  margin-left: auto;
  margin-right: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-right: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 90%;
    max-width: 500px;
    margin: 8px auto 12px auto; /* centracja w obrębie headera */
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 95%;
  }
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.color.darkerGrey};

  &::placeholder {
    color: ${({ theme }) => theme.color.darkerGrey};
  }
`;

export const SearchIconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
