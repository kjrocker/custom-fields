import * as React from 'react';
import { Message } from './Message';

const StatusBar = ({ text }) => (
  <div>
    {text ? (
      <Message error={true}>
        <h3>{text}</h3>
      </Message>
    ) : null}
  </div>
);

export default StatusBar;
