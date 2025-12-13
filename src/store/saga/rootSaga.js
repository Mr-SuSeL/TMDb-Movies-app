import moviesSaga from './moviesSaga';
import peopleSaga from './peopleSaga';

export default function* rootSaga() {
	// keep minimal: if sagas are wired later, this will be the entry
	yield moviesSaga();
	yield peopleSaga();
}
