import styled from "styled-components";
import { ReactComponent as VideoIcon } from "../../../assets/icon-video.svg";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  height: 48px;
`;

export const LogoTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;

  &:visited,
  &:active {
    color: ${({ theme }) => theme.color.white};
  }

  &:focus,
  &:focus-visible {
    outline: none;
  }
`;

export const Logo = styled(VideoIcon)`
  width: 40px;
  height: 40px;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 17px;
    height: 17px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: -1.5px;
  color: ${({ theme }) => theme.color.white};
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
    line-height: 17px;
    letter-spacing: -0.5px;
  }
`;