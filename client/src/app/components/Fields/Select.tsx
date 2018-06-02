import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { Input, InputProps } from 'reactstrap';

export interface SelectProps extends FieldRenderProps, InputProps {
  options: Array<{ value: any; label: string }>;
}

const Select: React.SFC<SelectProps> = ({ input, meta, options, ...rest }) => (
  <Input type="select" {...input} {...rest}>
    {options.map((opt) => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ))}
  </Input>
);

export default Select;
