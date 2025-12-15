import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import moviesReducer from './slices/moviesSlice';
import peopleReducer from './slices/peopleSlice';
import rootSaga from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    people: peopleReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
