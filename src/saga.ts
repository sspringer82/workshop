import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

function* fetchRecipe() {
  debugger;
  try {
    const data = yield (async (): Promise<any> => {
      const response = await fetch('http://localhost:3001/recipe');
      const data = await response.json();
      return data as any;
    })();
    // const response = yield call(fetch, 'http://localhost:3001/recipe') as any;
    // const data = yield response.json();
    yield put({ type: 'load_success', payload: data });
  } catch (e) {
    yield put({ type: 'load_fail', message: e.message });
  }
}

function* mySaga() {
  yield takeEvery('load', fetchRecipe);
}

export default mySaga;
