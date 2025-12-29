import { createSlice } from '@reduxjs/toolkit';

const peopleSlice = createSlice({
    name: 'people',
    initialState: {
        peopleList: [],
        isLoading: false,
        error: null,
        currentPage: 1,
        totalPages: 500,
        totalResults: 0,
    },
    reducers: {
        fetchPeopleStart: (state, action) => {
            state.isLoading = true;
            state.error = null;

            const payload = action.payload;
            if (typeof payload === "number") {
                state.currentPage = payload;
                return;
            }

            if (payload?.page) {
                state.currentPage = payload.page;
            }
        },
        fetchPeopleSuccess: (state, action) => {
            state.peopleList = action.payload.results;
            const apiTotal = action.payload.total_pages;
            
            // TMDB nie pozwala na paginację powyżej 500 stron
            state.totalPages = Math.min(apiTotal, 500);
            state.totalResults = action.payload.total_results ?? 0;
            state.isLoading = false;
        },
        setPage: (state, action) => {
            state.currentPage = action.payload;
        },

        fetchPeopleFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload || "Failed to fetch people";
        },
    },
});

export const {
    fetchPeopleStart,
    fetchPeopleSuccess,
    fetchPeopleFailure,
    setPage
} = peopleSlice.actions;

export const selectPeopleList = state => state.people.peopleList;
export const selectPeopleLoading = state => state.people.isLoading;
export const selectPeopleError = state => state.people.error;
export const selectCurrentPage = state => state.people.currentPage;
export const selectTotalPages = state => state.people.totalPages;
export const selectPeopleTotalResults = state => state.people.totalResults;

export default peopleSlice.reducer;