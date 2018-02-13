import * as React from 'react';
import { Message } from 'semantic-ui-react';

const StatusBar = ({ text }) => <div>{text ? <Message error={true} header={text} /> : null}</div>;

export default StatusBar;
