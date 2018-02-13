import * as React from 'react';
import { Message as UIMessage } from 'semantic-ui-react';

interface Props {
  onDismiss?: Function;
  warning?: boolean;
  success?: boolean;
  error?: boolean;
  info?: boolean;
}

const Message = (props: Props) => {
  return <Message onDismiss={props.onDismiss}>{props.children}</Message>;
};

export default Message;
