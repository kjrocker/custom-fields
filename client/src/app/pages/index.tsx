import * as React from 'react';
import { translate } from 'react-i18next';
import { Container, Jumbotron } from 'reactstrap';
import { LoginForm, RegisterForm } from '../components';

const App = (props) => (
  <React.Fragment>
    <Jumbotron>Welcome to your platform's solution to client form fields.</Jumbotron>
    <Container>
      <h1>Login</h1>
      <LoginForm onSubmit={console.log} />
      <h1>Sign Up</h1>
      <RegisterForm onSubmit={console.log} />
    </Container>
  </React.Fragment>
);

export default translate('common')(App);
