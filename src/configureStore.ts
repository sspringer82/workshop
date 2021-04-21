import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducer,
    {
      recipes: [],
    },
    applyMiddleware(sagaMiddleware),
  );

  sagaMiddleware.run(mySaga);
  return store;
}
