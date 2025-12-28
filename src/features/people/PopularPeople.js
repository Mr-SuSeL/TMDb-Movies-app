import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchPeopleStart,
    selectPeopleList,
    selectPeopleLoading,
    selectCurrentPage,
    selectTotalPages,
    setPage
} from "../../store/slices/peopleSlice.js";
import PersonTitle from "./PersonTitle";
import { Loader } from "../../common/Loader";
import { Pagination } from "../../common/Pagination";
import { PeopleSection, Heading, GridContainer, LoadingContainer } from './styled.js';

const PopularPeople = () => {
    const dispatch = useDispatch();
    const peopleList = useSelector(selectPeopleList);
    const isLoading = useSelector(selectPeopleLoading);
    const currentPage = useSelector(selectCurrentPage);
    const totalPages = useSelector(selectTotalPages);

    useEffect(() => {
        dispatch(fetchPeopleStart(currentPage));
    }, [dispatch, currentPage]);

    const handlePageChange = (newPage) => {
        if (newPage < 1 || newPage > totalPages) return;
        dispatch(setPage(newPage));
    };


    if (isLoading) {
        return (
            <PeopleSection>
                <Heading>Popularni ludzie</Heading>
                <Loader />
            </PeopleSection>
        );
    }

    if (!isLoading && (!peopleList || peopleList.length === 0)) {
        return <LoadingContainer>Brak wyników z TMDB.</LoadingContainer>;
    }

    const shouldShowPagination = totalPages > 1;

    return (
        <PeopleSection>
            <Heading>Popularni ludzie</Heading>

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