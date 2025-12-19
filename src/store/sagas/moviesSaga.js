// src/store/sagas/moviesSaga.js
import { call, put, takeLatest, all } from "redux-saga/effects";
import { createTMDBUrl } from "../../config/api";
import {
  fetchPopularMoviesRequest,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesFailure,
  fetchMovieDetailsRequest,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsFailure,
} from "../slices/moviesSlice";

// POPULAR MOVIES

function fetchPopularMoviesApi(page) {
  const url = createTMDBUrl(`movie/popular?page=${page}`);
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
    yield put(fetchPopularMoviesSuccess(data));
  } catch (error) {
    yield put(
      fetchPopularMoviesFailure(
        error.message || "Failed to fetch popular movies"
      )
    );
  }
}

// MOVIE DETAILS

function fetchMovieDetailsApi(id) {
  const detailsUrl = createTMDBUrl(`movie/${id}`);
  const creditsUrl = createTMDBUrl(`movie/${id}/credits`);

  return Promise.all([
    fetch(detailsUrl).then((r) => {
      if (!r.ok) throw new Error(`Details HTTP ${r.status}`);
      return r.json();
    }),
    fetch(creditsUrl).then((r) => {
      if (!r.ok) throw new Error(`Credits HTTP ${r.status}`);
      return r.json();
    }),
  ]).then(([details, credits]) => ({ details, credits }));
}

function* fetchMovieDetailsSaga(action) {
  try {
    const id = action.payload;
    const data = yield call(fetchMovieDetailsApi, id);
    yield put(fetchMovieDetailsSuccess(data));
  } catch (error) {
    yield put(
      fetchMovieDetailsFailure(
        error.message || "Failed to fetch movie details"
      )
    );
  }
}

export function* watchMovies() {
  yield all([
    takeLatest(fetchPopularMoviesRequest.type, fetchPopularMoviesSaga),
    takeLatest(fetchMovieDetailsRequest.type, fetchMovieDetailsSaga),
  ]);
}
