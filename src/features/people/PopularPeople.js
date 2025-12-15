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
import mockPeople from './peopleMockData';

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

    // Wyświetlamy 20 szkieletów, aby zbliżyć się do widoku TMDB (20 wyników na stronę)
    const SKELETON_COUNT = 20;
    const skeletonItems = Array(SKELETON_COUNT).fill(null);

    // 2. WIDOK ŁADOWANIA: RENDERUJEMY SIATKĘ SZKIELETÓW ZAMIAST TEKSTU
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

    // 3. WIDOK BRAKU DANYCH: fallback na mocki, by zawsze pokazać siatkę
    const displayList = (peopleList && peopleList.length > 0) ? peopleList : mockPeople;

    const shouldShowPagination = totalPages > 1;

    return (
        <PeopleSection>
            <Heading>Popularni ludzie</Heading>

            <GridContainer>
                {displayList.map(person => (
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