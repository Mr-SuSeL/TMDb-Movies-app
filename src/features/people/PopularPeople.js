import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchPeopleStart,
    selectPeopleList,
    selectPeopleLoading,
    selectPeopleError,
    selectCurrentPage,
    selectTotalPages,
    selectPeopleTotalResults,
    setPage
} from "../../store/slices/peopleSlice.js";
import PersonTitle from "./PersonTitle";
import { Loader } from "../../common/Loader";
import { Pagination } from "../../common/Pagination";
import { PeopleSection, Heading, GridContainer, LoadingContainer } from './styled.js';
import { useQueryParameter } from "../search/queryParameters";
import { NoResults } from "../../common/NoResults";

const PopularPeople = () => {
    const dispatch = useDispatch();
    const query = useQueryParameter("search");
    const peopleList = useSelector(selectPeopleList);
    const isLoading = useSelector(selectPeopleLoading);
    const error = useSelector(selectPeopleError);
    const currentPage = useSelector(selectCurrentPage);
    const totalPages = useSelector(selectTotalPages);
    const totalResults = useSelector(selectPeopleTotalResults);

    useEffect(() => {
        const pageToFetch = query ? 1 : currentPage;
        dispatch(fetchPeopleStart({ page: pageToFetch, query }));
    }, [dispatch, currentPage, query]);

    const handlePageChange = (newPage) => {
        if (newPage < 1 || newPage > totalPages) return;
        if (query) {
            dispatch(fetchPeopleStart({ page: newPage, query }));
        } else {
            dispatch(setPage(newPage));
        }
    };


    if (isLoading) {
        return (
            <PeopleSection>
                <Heading>
                    {query
                        ? `Wyniki wyszukiwania dla "${query}" (${totalResults})`
                        : "Popularni ludzie"}
                </Heading>
                <Loader />
            </PeopleSection>
        );
    }

    if (error) {
        return <LoadingContainer>Błąd: {error}</LoadingContainer>;
    }

    if (!isLoading && query && (!peopleList || peopleList.length === 0)) {
        return <NoResults query={query} />;
    }

    if (!isLoading && (!peopleList || peopleList.length === 0)) {
        return <LoadingContainer>Brak wyników z TMDB.</LoadingContainer>;
    }

    const shouldShowPagination = totalPages > 1;

    return (
        <PeopleSection>
            <Heading>
                {query
                    ? `Wyniki wyszukiwania dla "${query}" (${totalResults})`
                    : "Popularni ludzie"}
            </Heading>

            <GridContainer>
                {peopleList.map(person => (
                    <PersonTitle
                        key={person.id}
                        person={person}
                    />
                ))}
            </GridContainer>

            {shouldShowPagination && (
                <Pagination
                    page={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            )}
        </PeopleSection>
    );
};

export default PopularPeople;