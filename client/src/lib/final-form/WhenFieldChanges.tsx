import * as React from 'react';
import { Field } from 'react-final-form';
import { OnChange } from 'react-final-form-listeners';

const WhenFieldChanges: React.SFC<{ field: string; becomes: any; set: string; to: any }> = ({
  field,
  becomes,
  set,
  to
}) => (
  <Field name={set} subscription={{}}>
    {({ input: { onChange } }) => (
      <OnChange name={field}>
        {(value) => {
          if (value === becomes) {
            onChange(to);
          }
        }}
      </OnChange>
    )}
  </Field>
);

export default WhenFieldChanges;
