import * as React from 'react';
import { Field, FieldProps } from 'react-final-form';
import {
  Col,
  FormFeedback,
  FormGroup,
  FormText,
  Label
  } from 'reactstrap';
import Error from './Error';

export interface StylishFieldProps extends FieldProps {
  label: string;
  helpText?: string;
}

const StylishField: React.SFC<StylishFieldProps> = ({ label, helpText, ...rest }) => (
  <FormGroup row={true}>
    <Label sm={2} for={rest.name}>
      {label}
    </Label>
    <Col sm={10}>
      <Field {...rest} />
      <Error name={rest.name} errorRenderer={FormFeedback} />
      {helpText ? <FormText>{helpText}</FormText> : null}
    </Col>
  </FormGroup>
);

export default StylishField;
