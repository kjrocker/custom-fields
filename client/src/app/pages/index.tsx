import * as React from 'react';
import { translate } from 'react-i18next';
import { Jumbotron } from 'reactstrap';

const App = (props) => (
  <React.Fragment>
    <Jumbotron>Welcome to your platform's solution to client form fields. {props.t('key')}</Jumbotron>
  </React.Fragment>
);

export default translate('common')(App);
