import * as React from 'react';
import { Field, FormRenderProps } from 'react-final-form';
import { finalForm } from '../../../lib';

const RegisterForm = ({ handleSubmit }: FormRenderProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field name="username" component="input" />
      <Field name="password" component="input" type="password" />
      <Field name="passwordConfirmation" component="input" type="password" />
    </form>
  );
};

export default finalForm({ onSubmit: console.log })(RegisterForm);
