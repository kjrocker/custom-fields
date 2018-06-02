import {
  applyMiddleware,
  combineReducers,
  createStore,
  Reducer,
  ReducersMapObject,
  Store
  } from 'redux';
import thunk from 'redux-thunk';

const setupStore = (reducers: Reducer<any> | ReducersMapObject): Store<any> => {
  const reducer = typeof reducers === 'function' ? reducers : combineReducers(reducers);
  return createStore(reducer, applyMiddleware(thunk));
};

export default setupStore;
