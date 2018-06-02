import { createBrowserHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import i18n from './app/i18next';
import App from './app/pages';
import rootReducer from './app/redux';
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createBrowserHistory();

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const ConnectedApp = (props) => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </I18nextProvider>
    </Provider>
  );
};

ReactDOM.render(<ConnectedApp />, document.getElementById('root'));
