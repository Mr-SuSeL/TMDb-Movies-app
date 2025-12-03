import { call, put, takeLatest } from 'redux-saga/effects';
import { createTMDBUrl } from '../../config/api';
import {
  fetchPopularMoviesRequest,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesFailure,
} from '../slices/moviesSlice';

function fetchPopularMoviesApi() {
  const url = createTMDBUrl('movie/popular?page=1');
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    return response.json();
  });
}

function* fetchPopularMoviesSaga() {
  try {
    const data = yield call(fetchPopularMoviesApi);
    yield put(fetchPopularMoviesSuccess(data.results));
  } catch (error) {
    yield put(fetchPopularMoviesFailure(error.message || 'Failed to fetch popular movies'));
  }
}

export function* watchMovies() {
  yield takeLatest(fetchPopularMoviesRequest.type, fetchPopularMoviesSaga);
}
