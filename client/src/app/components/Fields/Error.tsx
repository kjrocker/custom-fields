import * as React from 'react';
import { Field } from 'react-final-form';

export interface ErrorProps {
  name: string;
  className?: string;
  errorRenderer?: React.ComponentType<any>;
}

const Error: React.SFC<ErrorProps> = ({ name, className, errorRenderer: Component = 'span' }) => (
  <Field
    name={name}
    subscription={{ touched: true, error: true, submitError: true }}
    render={({ meta: { touched, error, submitError } }) =>
      touched && (error || submitError) ? <Component className={className}>{error || submitError}</Component> : null
    }
  />
);

export default Error;
