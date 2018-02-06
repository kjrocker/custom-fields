import * as React from 'react';

import NavBar from './navbar';

class MyApp extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default MyApp;
