import styled from "styled-components";
import { ReactComponent as VideoIcon } from "../../../assets/icon-video.svg";

export const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    gap: 16px;
    height: 48px;
`;

export const LogoTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    /* Poprawka: Kolor biały, aby link był widoczny na czarnym tle */
    color: #FFFFFF;
    cursor: pointer;
`;

export const Logo = styled(VideoIcon)`
    width: 40px;
    height: 40px;
    /* Poprawka: Wymuszenie białego koloru dla ikony SVG */
    fill: #FFFFFF;

    @media (max-width: ${({ theme }) => theme.breakpoints?.mobileMax || "767px"}) {
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
  text-transform: capitalize;
  color: ${({ theme }) => theme.color.white};
  margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints?.mobileMax || "767px"}) {
        font-size: 13px;
        line-height: 17px;
        letter-spacing: -0.5px;
    }
`;