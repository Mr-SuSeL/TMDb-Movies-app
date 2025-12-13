import React from 'react';
import styled from 'styled-components';

const ToggleBtn = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.toggleBorder || '#ccc'};
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
`;

export const ThemeToggle = ({ isDarkMode, onToggle }) => {
  return (
    <ToggleBtn onClick={onToggle} aria-pressed={isDarkMode}>
      {isDarkMode ? 'Dark' : 'Light'}
    </ToggleBtn>
  );
};

export default ThemeToggle;
