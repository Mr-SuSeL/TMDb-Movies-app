import { all } from 'redux-saga/effects';
import { watchMovies } from './moviesSaga';

export function* rootSaga() {
  yield all([
    watchMovies(),
  ]);
}
