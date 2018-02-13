import * as React from 'react';
import { Provider } from 'react-redux';

const providerMock = store => BaseComponent => {
  return props => {
    return (
      <Provider store={store}>
        <BaseComponent {...this.props} />
      </Provider>
    );
  };
};

export default providerMock;
