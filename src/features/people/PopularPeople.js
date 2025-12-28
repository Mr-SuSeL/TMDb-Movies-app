import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQueryParameter } from "../../features/search/queryParameters";
import { NoResults } from "../../common/NoResults";
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
import { PeopleSection, Heading, GridContainer, LoadingContainer, PaginationBar, PageButton, PageInfo } from './styled.js';

const PopularPeople = () => {
    const dispatch = useDispatch();
    const query = useQueryParameter("search"); // Pobieramy frazę wyszukiwania z adresu URL
    const peopleList = useSelector(selectPeopleList);
    const isLoading = useSelector(selectPeopleLoading);
    const currentPage = useSelector(selectCurrentPage);
    const totalPages = useSelector(selectTotalPages);

    useEffect(() => {
        // Wysyłamy obiekt zawierający stronę oraz frazę zapytania
        dispatch(fetchPeopleStart({ page: currentPage, query: query || "" }));
    }, [dispatch, currentPage, query]);

    // Jeśli trwa ładowanie, pokazujemy Loader z odpowiednim nagłówkiem
    if (isLoading) {
        return (
            <PeopleSection>
                <Heading>{query ? `Wyszukiwanie dla "${query}"` : "Popularni ludzie"}</Heading>
                <Loader />
            </PeopleSection>
        );
    }

    // Jeśli nie ładujemy, mamy frazę zapytania i brak wyników – pokazujemy komponent NoResults
    if (!isLoading && query && (!peopleList || peopleList.length === 0)) {
        return <NoResults />;
    }

    // Wyświetlanie błędu w przypadku braku danych przy braku wyszukiwania
    if (!isLoading && (!peopleList || peopleList.length === 0)) {
        return <LoadingContainer>Brak wyników z TMDB.</LoadingContainer>;
    }

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

    const shouldShowPagination = totalPages > 1;

    return (
        <PeopleSection>
            <Heading>
                {query 
                    ? `Wyniki wyszukiwania dla "${query}" (${peopleList.length})` 
                    : "Popularni ludzie"
                }
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