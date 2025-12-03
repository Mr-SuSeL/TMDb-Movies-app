// src/store/slices/moviesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createTMDBUrl } from '../../config/api';

export const fetchPopularMovies = createAsyncThunk(
  'movies/fetchPopularMovies',
  async () => {
    console.log('🔄 Starting fetchPopularMovies...');  // DODAJ
    
    const url = createTMDBUrl('movie/popular?page=1');
    console.log('🌐 FETCH URL:', url);  // DODAJ
    
    const response = await fetch(url);
    console.log('📡 RESPONSE STATUS:', response.status, response.statusText);  // DODAJ
    
    if (!response.ok) {
      console.error('❌ API ERROR:', response.status, response.statusText);  // DODAJ
      throw new Error(`HTTP ${response.status}: Failed to fetch movies`);
    }
    
    const data = await response.json();
    console.log('✅ DATA LOADED:', data.results?.length, 'movies');  // DODAJ
    return data.results;
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    popularMovies: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearMovies: (state) => {
      state.popularMovies = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log('⏳ LOADING...');  // DODAJ
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.popularMovies = action.payload;
        console.log('🎉 MOVIES LOADED:', action.payload.length);  // DODAJ
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
        console.error('💥 FETCH REJECTED:', action.error.message);  // DODAJ
      });
  },
});

export const { clearMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
