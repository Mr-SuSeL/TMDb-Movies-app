import { all } from 'redux-saga/effects';
import peopleSaga from './peopleSaga'; // Import domyślny (bez klamerek)
import { watchMovies } from './moviesSaga'; // Import nazwany (w klamerkach)

export default function* rootSaga() {
    yield all([
        peopleSaga(),   // Wywołanie sagi osób
        watchMovies(),  // Wywołanie sagi filmów
    ]);
}