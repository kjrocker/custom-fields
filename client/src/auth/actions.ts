import { authApi } from '../api';
import { promiseDispatcher } from 'redux-promise-dispatch';
import * as types from './actionTypes';

import { addRedirect } from '../helpers';

const loginUserRequest = () => {
  return {
    type: types.LOGIN_USER_REQUEST
  };
};

const loginUserSuccess = (creds: any) => {
  localStorage.setItem('token', creds.jwt);
  localStorage.setItem('user', creds.user);
  return {
    type: types.LOGIN_USER_SUCCESS,
    payload: {
      user: creds.user,
      token: creds.jwt
    }
  };
};

const loginUserFailure = (error: any) => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  return {
    type: types.LOGIN_USER_FAILURE,
    payload: { error }
  };
};

const registerUser = promiseDispatcher(authApi.registerUser, {
  request: loginUserRequest,
  success: addRedirect(loginUserSuccess, '/'),
  failure: loginUserFailure
});

const loginUser = (creds: { email: string; password: string }, redirect: string = '/') => {
  return promiseDispatcher(authApi.loginUser, {
    success: addRedirect(loginUserSuccess, redirect),
    failure: loginUserFailure
  })(creds);
};

const logoutUser = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  return {
    type: types.LOGOUT_USER
  };
};

const logoutAndRedirect = addRedirect(logoutUser, '/login');

export { registerUser, loginUser, logoutAndRedirect, loginUserSuccess, loginUserFailure, loginUserRequest, logoutUser };
