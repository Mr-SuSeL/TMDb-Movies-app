import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { fetchPeopleStart, fetchPeopleSuccess, fetchPeopleFailure } from '../slices/peopleSlice';
import { getPopularPeople, searchPeople } from '../../features/people/peopleAPI';

function* handleFetchPeople(action) {
    try {
        // Rozpakowujemy page i query z payloadu (używając wartości domyślnych)
        const { page, query } = action.payload || { page: 1, query: "" };

        // Dodajemy opóźnienie (debounce), aby nie strzelać do API przy każdym znaku
        yield delay(600);

        // Wybieramy odpowiednią funkcję API w zależności od obecności query
        const response = query 
            ? yield call(searchPeople, query, page) 
            : yield call(getPopularPeople, page);

        yield put(fetchPeopleSuccess(response));
    } catch (err) {
        console.error('peopleSaga error:', err);
        yield put(fetchPeopleFailure());
    }
}

export default function* peopleSaga() {
    yield takeLatest(fetchPeopleStart.type, handleFetchPeople);
}