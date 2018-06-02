import * as React from 'react';
import { Button, Form } from 'reactstrap';
import { compose } from 'redux';
import { finalForm, withText } from '../../../lib';
import { Input, StylishField } from '../Fields';

const validate = (values) => {
  const errors: Record<string, string> = {};
  if (!values.username) {
    errors.username = 'Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
};

const LoginForm = (props) => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <StylishField label={props.usernameLabel} name="username" component={Input} helpText="Enter a unique username" />
      <StylishField
        label={props.passwordLabel}
        name="password"
        component={Input}
        type="password"
        helpText="Enter a secure password"
      />
      <Button type="submit">{props.loginButton}</Button>
    </Form>
  );
};

const mapText = (t, ownProps) => ({
  usernameLabel: t('common:forms.usernameLabel'),
  passwordLabel: t('common:forms.passwordLabel'),
  loginButton: t('common:forms.loginButtonLabel', { defaultValue: 'Login' })
});

export default compose(
  withText(mapText),
  finalForm({ validate })
)(LoginForm);
