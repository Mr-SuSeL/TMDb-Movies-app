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

    if (isLoading) {
        return <LoadingContainer>Ładowanie...</LoadingContainer>;
    }

    const shouldShowPagination = totalPages > 1;

    return (
        <section>
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