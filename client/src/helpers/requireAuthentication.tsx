import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { stringify } from 'qs';

const requireAuthentication = (BaseComponent: any) => {
  class AuthenticatedComponent extends React.Component<any, {}> {
    componentWillMount() {
      this.checkAuth(this.props.isAuthenticated);
    }

    componentWillReceiveProps(nextProps: any) {
      this.checkAuth(nextProps.isAuthenticated);
    }

    checkAuth(isAuthenticated: boolean) {
      if (!isAuthenticated) {
        const redirectAfterLogin = this.props.location.pathname;
        this.props.dispatch(push(`/login?${stringify({ next: redirectAfterLogin })}`, { encode: false }));
      }
    }

    render() {
      const { isAuthenticated, ...rest } = this.props;
      return this.props.isAuthenticated ? <BaseComponent {...rest} /> : null;
    }
  }

  const mapStateToProps = ({ auth }) => ({
    isAuthenticated: auth.isAuthenticated
  });

  return connect(mapStateToProps)(AuthenticatedComponent);
};

export default requireAuthentication;
