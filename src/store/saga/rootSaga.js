import { all, fork } from 'redux-saga/effects';
import moviesSaga from './moviesSaga';
import peopleSaga from './peopleSaga';

export default function* rootSaga() {
	yield all([
		fork(moviesSaga),
		fork(peopleSaga),
	]);
}
