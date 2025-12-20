import styled from "styled-components";
import { ReactComponent as VideoIcon } from "../../../assets/icon-video.svg";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 8px;
  }
`;

export const LogoTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

export const Logo = styled(VideoIcon)`
  width: 40px;
  height: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 17px;
    height: 17px;
  }
`;

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: -1.5px;
  color: ${({ theme }) => theme.color.white};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
    line-height: 17px;
    letter-spacing: -0.5px;
  }
`;
