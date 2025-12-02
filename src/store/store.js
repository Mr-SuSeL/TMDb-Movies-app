import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './slices/moviesSlice';
import peopleReducer from './slices/peopleSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    people: peopleReducer,
  },
});
