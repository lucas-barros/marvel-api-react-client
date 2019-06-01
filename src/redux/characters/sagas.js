import { call, put, takeLatest } from 'redux-saga/effects';
import { getCharacters } from 'services/marvel';
import types from './types';

// Debounce
function delay(ms) {
  return new Promise(resolve => setTimeout(() => resolve(true), ms));
}

function* fetchCharacters(action) {
  try {
    yield delay(500);

    const response = yield call(getCharacters, action.payload);

    yield put({ type: types.SUCCESS, response });
  } catch (e) {
    yield put({ type: types.FAILURE, message: e.message });
  }
}

function* charactersSagas() {
  yield takeLatest(types.REQUEST, fetchCharacters);
}

export { charactersSagas };
