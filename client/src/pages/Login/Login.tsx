import * as React from 'react';
import { connect } from 'react-redux';

import LoggedInMessage from '../../auth/loggedInMessage';
import LoginForm from './LoginForm';
import StatusBar from '../../components/statusBar';

class LoginWrapper extends React.Component<any, any> {
  render() {
    const { statusText, isAuthenticated } = this.props;
    const ChildComponent = isAuthenticated ? <LoggedInMessage statusText={statusText} /> : <LoginForm />;

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
