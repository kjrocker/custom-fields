import * as React from 'react';
import { Form, FormProps } from 'react-final-form';

const finalForm = (config: Partial<FormProps>) => (BaseComponent: React.ComponentType<any>) => (props: FormProps) => (
  <Form {...config} {...props} component={BaseComponent} />
);

export default finalForm;
