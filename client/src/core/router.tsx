import * as React from 'react';
import { Route, Switch } from 'react-router';
import App from './app';
import ProtectedComponent from './protectedExample';
import { LoginWrapper, RegisterWrapper } from '../auth';
import { FieldList } from '../fields';

const SimpleComponent = props => <div> I'm a dummy component! </div>;

const MyRouter = props => (
  <App>
    <Switch>
      <Route exact={true} path="/" component={SimpleComponent} />
      <Route path="/fields" component={FieldList} />
      <Route path="/protected" component={ProtectedComponent} />
      <Route path="/login" component={LoginWrapper} />
      <Route path="/register" component={RegisterWrapper} />
    </Switch>
  </App>
);

export default MyRouter;
