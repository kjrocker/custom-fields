import React, { Component } from 'react';

import NavBar from './navbar';

class MyApp extends Component {
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
