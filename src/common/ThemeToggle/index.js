import React from "react";
import { ToggleButton } from "./styled";

export const ThemeToggle = ({ isDarkMode, onToggle }) => (
  <ToggleButton onClick={onToggle} aria-label="Toggle theme">
    {isDarkMode ? "☾" : "☼"}
  </ToggleButton>
);
