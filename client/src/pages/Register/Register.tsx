import * as React from 'react';
import { connect } from 'react-redux';

import StatusBar from '../../components/statusBar';
import LoggedInMessage from '../../auth/loggedInMessage';
import RegisterForm from './RegisterForm';

class RegisterWrapper extends React.Component<any, any> {
  render() {
    const { statusText, isAuthenticated } = this.props;
    const ChildComponent = isAuthenticated ? <LoggedInMessage statusText={statusText} /> : <RegisterForm />;

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

export default connect(mapStateToProps, null)(RegisterWrapper);
