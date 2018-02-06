import * as React from 'react';

import { requireAuthentication } from '../helpers';

class ProtectedExample extends React.Component<any, any> {
  render() {
    return <div>You must be logged in to see this!</div>;
  }
}

export default requireAuthentication(ProtectedExample);
