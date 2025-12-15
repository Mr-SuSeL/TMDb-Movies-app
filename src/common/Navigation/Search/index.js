import React from "react";
import { ReactComponent as SearchIconSvg } from "../../../assets/icon-search.svg";
import { useLocation } from "react-router-dom";
import { SearchWrapper, SearchInput, SearchIcon } from "./styled";

const Search = () => {
    const location = useLocation();
    const placeholder = location.pathname.includes("people")
        ? "Search for people..."
        : "Search for movies...";

    return (
        <SearchWrapper>
            <SearchIcon>
                <SearchIconSvg />
            </SearchIcon>
            <SearchInput placeholder={placeholder} />
        </SearchWrapper>
    );
};

export default Search;