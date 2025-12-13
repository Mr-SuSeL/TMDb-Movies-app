import { call, put, takeLatest } from 'redux-saga/effects';
import { getPopularPeople } from '../../features/people/peopleAPI';
import {
	fetchPeopleSuccess,
	fetchPeopleFailure,
	fetchPeopleStart,
} from '../slices/peopleSlice';

function* handleFetchPeople(action) {
	try {
		const page = action.payload || 1;
		const data = yield call(getPopularPeople, page);
		yield put(fetchPeopleSuccess(data));
	} catch (err) {
		yield put(fetchPeopleFailure());
	}
}

export default function* peopleSaga() {
	yield takeLatest(fetchPeopleStart.type, handleFetchPeople);
}
