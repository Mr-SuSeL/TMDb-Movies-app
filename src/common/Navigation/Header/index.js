// src/common/Navigation/Header/index.js
import React from "react";
import {
  StyledHeader,
  LeftSection,
  Logo,
  Title,
  StyledList,
  StyledNavLink,
  SearchWrapper,
  SearchInput,
  SearchIconWrapper,
} from "./styled";
import { ReactComponent as SearchIcon } from "../../../assets/icon-search.svg";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const placeholder = location.pathname.includes("people")
    ? "Search for people..."
    : "Search for movies...";

  return (
    <StyledHeader>
      <LeftSection>
        <Logo />
        <Title>Movies Browser</Title>
      </LeftSection>

      <StyledList>
        <li>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/people">People</StyledNavLink>
        </li>
      </StyledList>

      <SearchWrapper>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <SearchInput placeholder={placeholder} />
      </SearchWrapper>
    </StyledHeader>
  );
};
