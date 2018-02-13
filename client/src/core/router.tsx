import * as React from 'react';
import { Route, Switch } from 'react-router';
import App from './app';
import { Login, Register, FieldList } from '../pages';

const SimpleComponent = props => <div> I'm a dummy component! </div>;

const MyRouter = props => (
  <App>
    <Switch>
      <Route exact={true} path="/" component={SimpleComponent} />
      <Route path="/fields" component={FieldList} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  </App>
);

export default MyRouter;
