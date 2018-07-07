import * as React from 'react';
import { Form, FormProps } from 'react-final-form';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

const defaultLog = (...args) => console.log('[Final Form Default Submit]', ...args);

const finalForm = <Props extends any, Config extends Partial<FormProps>>(config: Config) => (
  BaseComponent: React.ComponentType<Props>
) => (props: Omit<Props & FormProps, keyof Config | 'component' | 'children' | 'render'>) => (
  <Form onSubmit={defaultLog} {...config} {...props} component={BaseComponent} />
);

export default finalForm;
