import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  sagaMiddleware.run(mySaga);

  return createStore(
    reducer,
    {
      recipes: [],
    },
    applyMiddleware(sagaMiddleware),
  );
}
