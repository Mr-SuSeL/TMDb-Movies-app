import React from "react";
import { Nav, NavLinkItem } from "./styled";

const Menu = () => (
    <Nav>
        <NavLinkItem to="/movies">Movies</NavLinkItem>
        <NavLinkItem to="/people">People</NavLinkItem>
    </Nav>
);

export default Menu;