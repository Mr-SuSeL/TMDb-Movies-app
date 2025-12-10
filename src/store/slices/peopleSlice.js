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
            state.currentPage = action.payload || state.currentPage;
        },
        fetchPeopleSuccess: (state, action) => {
            state.peopleList = action.payload.results;
            state.totalPages = action.payload.total_pages;
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