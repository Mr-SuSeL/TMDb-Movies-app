import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Search from "./Search";
import { Wrapper, Container } from "./styled";

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