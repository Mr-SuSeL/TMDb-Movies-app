// src/common/Navigation/index.js
import React from "react";
import { Wrapper, Container } from "./styled";
import Header from "./Header";
import Menu from "./Menu";
import Search from "./Search";
import { ThemeToggle } from "../ThemeToggle";

const Navigation = ({ isDarkMode, onToggleTheme }) => (
  <Wrapper>
    <Container>
      <Header />
      <Menu />
      <Search />
      <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />
    </Container>
  </Wrapper>
);

export default Navigation;
