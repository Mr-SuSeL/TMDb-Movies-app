import React from "react";
import { HeaderWrapper, LogoTitleWrapper, Logo, Title } from "./styled";

const Header = () => (
  <HeaderWrapper>
    <LogoTitleWrapper>
      <Logo />
      <Title>Movies Browser</Title>
    </LogoTitleWrapper>
  </HeaderWrapper>
);

export default Header;