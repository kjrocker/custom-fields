import * as React from 'react';
import { FormProps, FormRenderProps } from 'react-final-form';
import { Button } from 'reactstrap';
import { compose } from 'redux';
import { finalForm, withText } from '../../../lib';
import { Input, StylishField } from '../Fields';

const RegisterForm = (props: FormRenderProps & any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <StylishField label={props.usernameLabel} name="username" component={Input} />
      <StylishField label={props.passwordLabel} name="password" component={Input} type="password" />
      <StylishField label={props.confirmationLabel} name="passwordConfirmation" component={Input} type="password" />
      <Button type="submit">{props.registerButton}</Button>
    </form>
  );
};

const mapText = (t, ownProps) => ({
  usernameLabel: t('common:forms.usernameLabel'),
  passwordLabel: t('common:forms.passwordLabel'),
  confirmationLabel: t('common:forms.passwordConfirmationLabel'),
  registerButton: t('common:forms.registerButtonLabel', { defaultValue: 'Register' })
});

export default compose<any>(
  finalForm<{}, {}>({}),
  withText(mapText)
)(RegisterForm) as React.ComponentType<FormProps>;
