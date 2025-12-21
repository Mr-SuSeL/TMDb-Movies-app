import styled from "styled-components";

export const ToggleButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 4px 8px;
  border-radius: 999px;

  font-size: 18px;
  line-height: 1;
  color: ${({ theme }) => theme.color.white};
  &:hover {
    color: ${({ theme }) => theme.color.darkerGrey};
  }
`;
