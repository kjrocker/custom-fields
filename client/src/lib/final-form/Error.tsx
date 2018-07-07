import * as React from 'react';
import { Field } from 'react-final-form';

export interface ErrorProps {
  name: string;
  errorRenderer?: React.ComponentType<any>;
}

const Error: React.SFC<ErrorProps> = ({ name, errorRenderer: Component = 'span', ...rest }) => (
  <Field
    name={name}
    subscription={{ touched: true, error: true, submitError: true }}
    render={({ meta: { touched, error, submitError } }) =>
      touched && (error || submitError) ? <Component {...rest}>{error || submitError}</Component> : null
    }
  />
);

export default Error;
