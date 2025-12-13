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
import { GridContainer, LoadingContainer } from './styled.js';

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

    const SKELETON_COUNT = 12;
    const skeletonItems = Array(SKELETON_COUNT).fill(null);

    if (isLoading) {
        return (
            <section>
                <h1>Popular People</h1>
                <GridContainer>
                    {skeletonItems.map((_, index) => (
                        <PersonSkeletonCard key={index} />
                    ))}
                </GridContainer>
            </section>
        );
    }

    if (!peopleList || peopleList.length === 0) {
        return <LoadingContainer>Nie znaleziono popularnych osób.</LoadingContainer>;
    }


    const shouldShowPagination = totalPages > 1;

    return (
        <section>
            <h1>Popular People</h1>

            <GridContainer>
                {peopleList.map(person => (
                    <PersonTitle
                        key={person.id}
                        person={person}
                    />
                ))}
            </GridContainer>

            {shouldShowPagination && (
                <div style={{ textAlign: 'center', margin: '30px 0' }}>
                    <button
                        onClick={goToPreviousPage}
                        disabled={currentPage === 1 || isLoading}
                    >
                        &lt; Poprzednia
                    </button>
                    <span> Strona {currentPage} z {totalPages} </span>
                    <button
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages || isLoading}
                    >
                        Następna &gt;
                    </button>
                </div>
            )}
        </section>
    );
};

export default PopularPeople;