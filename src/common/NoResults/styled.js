import styled from "styled-components";
import { ReactComponent as NoResultsPicture } from "./noResults.svg";

export const Wrapper = styled.div`
  max-width: 1368px;
  margin: 40px auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin: 24px auto;
  }
`;

export const Title = styled.h2`
  align-self: flex-start;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 18px;
    margin-bottom: 24px;
    align-self: center; // Opcjonalnie na telefonie może być na środku
  }
`;

export const StyledNoResultsPicture = styled(NoResultsPicture)`
  width: 100%;
  max-width: 668px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    max-width: 300px;
  }
`;