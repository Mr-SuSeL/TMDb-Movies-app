import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    popularMovies: [],
    loading: false,
    error: null,
    page: 1,
    totalPages: 1,
    totalResults: 0, // Nowe pole
    movieDetails: null,
    movieCredits: null,
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
      state.popularMovies = action.payload.results;
      state.page = action.payload.page;
      state.totalResults = action.payload.total_results; // Zapisujemy liczbę wyników
      const apiTotal = action.payload.total_pages;
      state.totalPages = Math.min(apiTotal, 500);
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
      state.totalResults = 0;
    },

    fetchMovieDetailsRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.movieDetails = null;
      state.movieCredits = null;
    },

    fetchMovieDetailsSuccess: (state, action) => {
      state.loading = false;
      state.movieDetails = action.payload.details;
      state.movieCredits = action.payload.credits;
    },

    fetchMovieDetailsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchPopularMoviesRequest,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesFailure,
  clearMovies,
  fetchMovieDetailsRequest,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsFailure,
} = moviesSlice.actions;

export default moviesSlice.reducer;