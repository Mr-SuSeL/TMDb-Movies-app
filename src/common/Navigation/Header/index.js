import React from "react";
import { HeaderWrapper, LogoTitleWrapper, Logo, Title } from "./styled";
import { Link } from "react-router-dom";

const Header = () => (
  <HeaderWrapper>
    <LogoTitleWrapper as={Link} to="/movies">
      <Logo />
      <Title>Movies Browser</Title>
    </LogoTitleWrapper>
  </HeaderWrapper>
);

export default Header;