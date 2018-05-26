import * as React from 'react';
import { Field } from 'react-final-form';
import { finalForm } from '../../../lib';

const LoginForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field name="username" component="input" />
      <Field name="password" component="input" type="password" />
    </form>
  );
};

export default finalForm({ onSubmit: console.log })(LoginForm);
