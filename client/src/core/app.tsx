import * as React from 'react';
import { Route } from 'react-router-dom';
import { Navbar } from '../components/';

const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <React.Fragment>
          <Navbar />
          <Component {...matchProps} />
        </React.Fragment>
      )}
    />
  );
};

export default DefaultLayout;
