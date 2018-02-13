import * as React from 'react';

import StatusBar from '../components/statusBar';

const loggedInMessage = ({ statusText }) => (
  <div>
    <StatusBar text={statusText} />
    <p>You are already logged in!</p>
  </div>
);

export default loggedInMessage;
