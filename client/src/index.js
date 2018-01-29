import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware, ConnectedRouter } from 'react-router-redux';

import { RootReducer, MyApp } from './core';
import { actions } from './auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// History
const history = createHistory();
const reduxRouterMiddleware = routerMiddleware(history);

const store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunk, reduxRouterMiddleware)));

// This is good. Auth logic. Keep this.
let jwt = localStorage.getItem('token');
let user = localStorage.getItem('user');
if (jwt !== null && jwt !== undefined) {
  store.dispatch(actions.loginUserSuccess({ user, jwt }));
}

const App = props => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MyApp />
      </ConnectedRouter>
    </Provider>
  );
};

console.log(App);

ReactDOM.render(<App />, document.getElementById('root'));
