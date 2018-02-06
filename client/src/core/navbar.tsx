import * as React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { LogoutButton } from '../auth';

const RightMenu = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return (
      <Menu.Menu position="right">
        <Menu.Item>
          <LogoutButton />
        </Menu.Item>
      </Menu.Menu>
    );
  } else {
    return (
      <Menu.Menu position="right">
        <Menu.Item as={Link} to="/login">
          Login
        </Menu.Item>
        <Menu.Item as={Link} to="/register">
          Register
        </Menu.Item>
      </Menu.Menu>
    );
  }
};

class NavBar extends React.Component<any, any> {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <Menu>
        <Menu.Item as={Link} to="/">
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="/protected">
          Protected Element
        </Menu.Item>
        <Menu.Menu position="right">
          <RightMenu isAuthenticated={isAuthenticated} />
        </Menu.Menu>
      </Menu>
    );
  }
}

const mapStateToProps = state => ({
  pathName: state.routing.location.pathName,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, null)(NavBar);
