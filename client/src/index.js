import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';

import { RootReducer, MyApp } from './core';
import { actions } from './auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reduxRouter = routerMiddleware(browserHistory);

const store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunk, reduxRouter)));
const history = syncHistoryWithStore(browserHistory, store);

let jwt = localStorage.getItem('token');
let user = localStorage.getItem('user');
if (jwt !== null && jwt !== undefined) {
  store.dispatch(actions.loginUserSuccess({ user, jwt }));
}

ReactDOM.render(
  <Provider store={store}>
    <MyApp history={history} />
  </Provider>,
  document.getElementById('root')
);
