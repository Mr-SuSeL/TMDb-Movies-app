// src/common/Navigation/index.js
import React from "react";
import { Wrapper, Container } from "./styled";
import Header from "./Header";
import Menu from "./Menu";
import Search from "./Search";

const Navigation = () => (
  <Wrapper>
    <Container>
      <Header />
      <Menu />
      <Search />
    </Container>
  </Wrapper>
);

export default Navigation;
