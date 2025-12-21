import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchPeopleStart, fetchPeopleSuccess, fetchPeopleFailure } from '../slices/peopleSlice';
import { getTrendingPeople } from '../../features/people/peopleAPI';

function* handleFetchPeople(action) {
    try {
        const page = action.payload || 1;
        const response = yield call(getTrendingPeople, page, 'day');
        yield put(fetchPeopleSuccess(response));
    } catch (err) {
        console.error('peopleSaga error', err);
        yield put(fetchPeopleFailure());
    }
}

export default function* peopleSaga() {
    yield takeLatest(fetchPeopleStart.type, handleFetchPeople);
}
