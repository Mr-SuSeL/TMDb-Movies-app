// src/store/slices/moviesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    popularMovies: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchPopularMoviesRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPopularMoviesSuccess: (state, action) => {
      state.loading = false;
      state.popularMovies = action.payload;
    },
    fetchPopularMoviesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearMovies: (state) => {
      state.popularMovies = [];
      state.loading = false;
      state.error = null;
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
