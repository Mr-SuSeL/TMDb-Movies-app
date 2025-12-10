// src/common/ThemeToggle/index.js
import React from "react";
import { ToggleButton } from "./styled";

export const ThemeToggle = ({ isDarkMode, onToggle }) => (
  <ToggleButton onClick={onToggle}>
    {isDarkMode ? "Light mode" : "Dark mode"}
  </ToggleButton>
);
