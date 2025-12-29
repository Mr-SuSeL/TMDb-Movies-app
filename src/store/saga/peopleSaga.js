import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { fetchPeopleStart, fetchPeopleSuccess, fetchPeopleFailure } from '../slices/peopleSlice';
import { getPopularPeople, searchPeople } from '../../features/people/peopleAPI';

function* handleFetchPeople(action) {
    try {
        const payload = action.payload;
        const page = typeof payload === "number" ? payload : (payload?.page || 1);
        const query = typeof payload === "object" ? payload?.query : undefined;

        const response = query
            ? yield call(searchPeople, { page, query })
            : yield call(getPopularPeople, page);

        yield delay(500); // Loader UX
        yield put(fetchPeopleSuccess(response));
    } catch (err) {
        console.error('peopleSaga error', err);
        yield put(fetchPeopleFailure(err?.message));
    }
}

export default function* peopleSaga() {
    yield takeLatest(fetchPeopleStart.type, handleFetchPeople);
}