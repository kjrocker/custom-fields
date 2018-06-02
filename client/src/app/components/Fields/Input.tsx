import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { Input, InputProps } from 'reactstrap';

export interface MyInputProps extends FieldRenderProps, InputProps {}

const MyInput: React.SFC<MyInputProps> = ({ input, meta, ...rest }) => (
  <Input invalid={meta.invalid && meta.touched} {...input} {...rest} />
);

export default MyInput;
