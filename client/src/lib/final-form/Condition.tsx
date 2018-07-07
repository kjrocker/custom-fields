import * as React from 'react';
import { Field } from 'react-final-form';

const Condition: React.SFC<{ when: string; is: any; children: React.ReactNode }> = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
);

export default Condition;
