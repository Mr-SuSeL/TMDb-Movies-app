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
import PersonSkeletonCard from "./PersonSkeletonCard.js";
import { PeopleSection, Heading, GridContainer, LoadingContainer, PaginationBar, PageButton, PageInfo } from './styled.js';

const PopularPeople = () => {
    const dispatch = useDispatch();
    const peopleList = useSelector(selectPeopleList);
    const isLoading = useSelector(selectPeopleLoading);
    const currentPage = useSelector(selectCurrentPage);
    const totalPages = useSelector(selectTotalPages);

    useEffect(() => {
        dispatch(fetchPeopleStart(currentPage));
    }, [dispatch, currentPage]);

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            dispatch(setPage(currentPage + 1));
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            dispatch(setPage(currentPage - 1));
        }
    };

    const SKELETON_COUNT = 20;
    const skeletonItems = Array(SKELETON_COUNT).fill(null);

    if (isLoading) {
        return (
            <PeopleSection>
                <Heading>Popularni ludzie</Heading>
                <GridContainer>
                    {skeletonItems.map((_, index) => (
                        <PersonSkeletonCard key={index} />
                    ))}
                </GridContainer>
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
                <PaginationBar>
                    <PageButton onClick={goToPreviousPage} disabled={currentPage === 1 || isLoading}>
                        Poprzedni
                    </PageButton>
                    <PageInfo>Strona {currentPage} z {totalPages}</PageInfo>
                    <PageButton primary onClick={goToNextPage} disabled={currentPage === totalPages || isLoading}>
                        Następny
                    </PageButton>
                </PaginationBar>
            )}
        </PeopleSection>
    );
};

export default PopularPeople;