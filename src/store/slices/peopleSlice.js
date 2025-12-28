import { createSlice } from '@reduxjs/toolkit';

const peopleSlice = createSlice({
    name: 'people',
    initialState: {
        peopleList: [],
        isLoading: false,
        currentPage: 1,
        totalPages: 500,
    },
    reducers: {
        fetchPeopleStart: (state, action) => {
            state.isLoading = true;
            
            // Obsługa różnych typów payloadu, aby zachować spójność currentPage
            if (action.payload && typeof action.payload === "object") {
                state.currentPage = action.payload.page || 1;
            } else if (typeof action.payload === "number") {
                state.currentPage = action.payload;
            }
        },
        fetchPeopleSuccess: (state, action) => {
            state.peopleList = action.payload.results;
            const apiTotal = action.payload.total_pages;
            
            // TMDB nie pozwala na paginację powyżej 500 stron
            state.totalPages = Math.min(apiTotal, 500);
            state.isLoading = false;
        },
        setPage: (state, action) => {
            state.currentPage = action.payload;
        },
        fetchPeopleFailure: (state) => {
            state.isLoading = false;
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
export const selectCurrentPage = state => state.people.currentPage;
export const selectTotalPages = state => state.people.totalPages;

export default peopleSlice.reducer;