// src/store/slices/moviesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    popularMovies: [],
    loading: false,
    error: null,
    page: 1,
    totalPages: 1,
  },
  reducers: {
    fetchPopularMoviesRequest: (state, action) => {
      state.loading = true;
      state.error = null;
      if (action.payload?.page) {
        state.page = action.payload.page;
      }
    },
    fetchPopularMoviesSuccess: (state, action) => {
      state.loading = false;
      state.popularMovies = action.payload.results;     // TMDB → results [web:59]
      state.page = action.payload.page;                 // TMDB → page [web:59]
      state.totalPages = action.payload.total_pages;    // TMDB → total_pages [web:59]
    },
    fetchPopularMoviesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearMovies: (state) => {
      state.popularMovies = [];
      state.loading = false;
      state.error = null;
      state.page = 1;
      state.totalPages = 1;
    },
  },
});

export const {
  fetchPopularMoviesRequest,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesFailure,
  clearMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
