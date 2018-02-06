import * as React from 'react';
import { Message as UIMessage, MessageProps } from 'semantic-ui-react';

interface Props {
  onDismiss?: (event: React.MouseEvent<HTMLElement>, data: MessageProps) => void;
  warning?: boolean;
  success?: boolean;
  error?: boolean;
  info?: boolean;
}

const Message: React.SFC<Props> = props => {
  return <UIMessage onDismiss={props.onDismiss}>{props.children}</UIMessage>;
};

export default Message;
