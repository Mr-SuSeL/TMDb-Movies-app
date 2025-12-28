import { all } from 'redux-saga/effects';
import peopleSaga from './peopleSaga';
import { watchMovies } from './moviesSaga'; 

export default function* rootSaga() {
    yield all([
        peopleSaga(),
        watchMovies(), 
    ]);
}