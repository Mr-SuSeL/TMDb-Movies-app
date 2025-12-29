import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as SearchIconSvg } from "../../../assets/icon-search.svg";
import { SearchWrapper, SearchInput, SearchIcon } from "./styled";
import { useQueryParameter, useReplaceQueryParameter } from "../../../features/search/queryParameters";

const Search = () => {
    const location = useLocation();
    const query = useQueryParameter("search");
    const replaceQueryParameter = useReplaceQueryParameter();
    
    // Lokalny stan dla inputa, żeby pisanie było płynne i natychmiastowe
    const [inputValue, setInputValue] = useState(query || "");

    // Synchronizacja lokalnego stanu z URL (np. gdy użytkownik kliknie "wstecz")
    useEffect(() => {
        setInputValue(query || "");
    }, [query]);

    // Logika Debounce: czekamy 500ms po zakończeniu pisania, zanim zmienimy URL
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (inputValue.trim() !== (query || "")) {
                replaceQueryParameter({
                    key: "search",
                    value: inputValue.trim() !== "" ? inputValue : undefined,
                });
            }
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [inputValue, query, replaceQueryParameter]);

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const placeholder = location.pathname.includes("people")
        ? "Szukaj osób..."
        : "Szukaj filmów...";

    return (
        <SearchWrapper>
            <SearchIcon>
                <SearchIconSvg />
            </SearchIcon>
            <SearchInput 
                placeholder={placeholder}
                value={inputValue}
                onChange={onInputChange}
            />
        </SearchWrapper>
    );
};

export default Search;