// src/store/sagas/moviesSaga.js
import { call, put, takeLatest } from "redux-saga/effects";
import { createTMDBUrl } from "../../config/api";
import {
  fetchPopularMoviesRequest,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesFailure,
} from "../slices/moviesSlice";

function fetchPopularMoviesApi(page) {
  const url = createTMDBUrl(`movie/popular?page=${page}`); // ← dynamiczna strona [web:59]
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    return response.json();
  });
}

function* fetchPopularMoviesSaga(action) {
  try {
    const page = action.payload?.page || 1;
    const data = yield call(fetchPopularMoviesApi, page);
    // data zawiera: page, results, total_pages, total_results [web:59]
    yield put(fetchPopularMoviesSuccess(data));
  } catch (error) {
    yield put(
      fetchPopularMoviesFailure(error.message || "Failed to fetch popular movies")
    );
  }
}

export function* watchMovies() {
  yield takeLatest(fetchPopularMoviesRequest.type, fetchPopularMoviesSaga);
}
