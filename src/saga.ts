import { call, put, takeEvery } from 'redux-saga/effects';

function* fetchRecipe(): any {
  try {
    const response: any = yield call(
      fetch,
      'http://localhost:3001/recipe',
    ) as any;
    const data = yield response.json();
    yield put({ type: 'load_success', payload: data });
  } catch (e) {
    yield put({ type: 'load_fail', message: e.message });
  }
}

function* mySaga() {
  yield takeEvery('load', fetchRecipe);
}

export default mySaga;
