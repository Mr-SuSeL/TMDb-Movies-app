import styled, { keyframes } from "styled-components";
import SpinnerIcon from "./Spinner.svg";

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  margin-top: 120px;
  text-align: center;
  color: ${({ theme }) => theme.text};
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin-top: 24px;
    font-size: 17px;
  }
`;

export const StyledSpinner = styled.img.attrs({
  src: SpinnerIcon,
  alt: "Ładowanie",
})`
  margin-top: 48px;
  animation: ${rotate} 1s linear infinite;
  width: 91px;
  height: 91px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 35px;
    height: 35px;
    margin-top: 32px;
  }
`;