import * as React from 'react';
import { connect } from 'react-redux';

import LoginForm from './LoginForm';
import { StatusBar } from '../../components';

class LoginWrapper extends React.Component<any, any> {
  render() {
    const { statusText, isAuthenticated } = this.props;
    const ChildComponent = isAuthenticated ? `You are already logged in!` : <LoginForm />;

    return (
      <div>
        <StatusBar text={statusText} />
        {ChildComponent}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticating: state.auth.isAuthenticating,
  isAuthenticated: state.auth.isAuthenticated,
  statusText: state.auth.statusText
});

export default connect(mapStateToProps, null)(LoginWrapper);
