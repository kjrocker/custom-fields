import * as React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { LogoutButton } from '../ActionButton';

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

export default RightMenu;
