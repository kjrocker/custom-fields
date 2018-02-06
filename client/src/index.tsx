import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware, ConnectedRouter } from 'react-router-redux';

import { App } from './core';
import rootReducer from './redux';
import { loginUserSuccess } from './redux/actions';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// History
const history = createHistory();
const reduxRouterMiddleware = routerMiddleware(history);

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, reduxRouterMiddleware)));

// This is good. Auth logic. Keep this.
let jwt = localStorage.getItem('token');
let user = localStorage.getItem('user');
if (jwt !== null && jwt !== undefined) {
  store.dispatch(loginUserSuccess({ user, jwt }));
}

const ConnectedApp = props => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  );
};

ReactDOM.render(<ConnectedApp />, document.getElementById('root'));
