import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form, Button } from 'semantic-ui-react';

import { registerUser } from '../../redux/actions';

class RegisterForm extends React.Component<any, any> {
  register = values => {
    this.props.actions.registerUser(values);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit(this.register)}>
        <Form.Field>
          <label htmlFor="user[email]">Email</label>
          <Field name="user[email]" component="input" type="text" />
        </Form.Field>
        <Form.Field>
          <label htmlFor="user[password]">Password</label>
          <Field name="user[password]" component="input" type="password" />
        </Form.Field>
        <Form.Field>
          <label htmlFor="user[password_confirmation]">Confirmation</label>
          <Field name="user[password_confirmation]" component="input" type="password" />
        </Form.Field>
        <Button primary={true} type="submit">
          Register
        </Button>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ registerUser }, dispatch)
});

const registerForm = connect(null, mapDispatchToProps)(RegisterForm);

export default reduxForm({ form: 'register' })(registerForm);
