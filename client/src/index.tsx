import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './app/redux';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const ConnectedApp = props => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div />
      </ConnectedRouter>
    </Provider>
  );
};

ReactDOM.render(<ConnectedApp />, document.getElementById('root'));
