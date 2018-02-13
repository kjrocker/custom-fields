import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form, Button } from 'semantic-ui-react';
import { parse } from 'qs';

import { loginUser } from '../redux/actions';

class LoginForm extends React.Component<any, any> {
  login = values => {
    const redirectRoute = parse(this.props.redirect).next || '/';
    this.props.actions.loginUser(values, redirectRoute);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit(this.login)}>
        <Form.Field>
          <label htmlFor="auth[email]">Email</label>
          <Field name="auth[email]" component="input" type="text" />
        </Form.Field>
        <Form.Field>
          <label htmlFor="auth[password]">Password</label>
          <Field name="auth[password]" component="input" type="password" />
        </Form.Field>
        <Button primary={true} type="submit">
          Login
        </Button>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ loginUser }, dispatch)
});

const mapStateToProps = state => ({
  redirect: state.routing.location.search
});

const loginForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default reduxForm({ form: 'login' })(loginForm);
