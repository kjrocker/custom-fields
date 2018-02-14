import * as React from 'react';
import { Switch } from 'react-router';
import DefaultLayout from './app';
import { Login, Register, FieldList } from '../pages';

const SimpleComponent = props => <div> I'm a dummy component! </div>;

const MyRouter = props => (
  <Switch>
    <DefaultLayout exact={true} path="/" component={SimpleComponent} />
    <DefaultLayout path="/fields" component={FieldList} />
    <DefaultLayout path="/login" component={Login} />
    <DefaultLayout path="/register" component={Register} />
  </Switch>
);

export default MyRouter;
