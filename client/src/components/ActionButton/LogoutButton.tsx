import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { logoutUser } from '../../redux/actions';

const logoutButton = ({ actions }) => {
  return <a onClick={actions.logoutUser}>Logout</a>;
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ logoutUser }, dispatch)
});

export default connect(null, mapDispatchToProps)(logoutButton);
