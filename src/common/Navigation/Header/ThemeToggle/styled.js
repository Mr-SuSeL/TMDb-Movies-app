// src/common/ThemeToggle/styled.js
import styled from "styled-components";

export const ToggleButton = styled.button`
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid #9ca3af;
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  margin: 16px auto;
  display: block;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 12px;
  }
`;
