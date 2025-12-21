// src/common/Navigation/index.js
import React from "react";
import {
  Wrapper,
  Container,
  HeaderWrapper,
  MenuWrapper,
  SearchWrapper,
  ThemeToggleWrapper,
} from "./styled";
import Header from "./Header";
import Menu from "./Menu";
import Search from "./Search";
import { ThemeToggle } from "../ThemeToggle";

const Navigation = ({ isDarkMode, onToggleTheme }) => (
  <Wrapper>
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      <MenuWrapper>
        <Menu />
      </MenuWrapper>

      <SearchWrapper>
        <Search />
      </SearchWrapper>

      <ThemeToggleWrapper>
        <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />
      </ThemeToggleWrapper>
    </Container>
  </Wrapper>
);

export default Navigation;
