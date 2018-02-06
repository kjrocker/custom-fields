import * as types from './actionTypes';

import { genericAJAX, postFormRequest, addRedirect } from '../helpers/asyncActions';

function registerUser(formObj: any) {
  const request = postFormRequest(formObj, '');
  return genericAJAX('/users', request, {
    start: loginUserRequest,
    succeed: addRedirect(loginUserSuccess, '/'),
    fail: loginUserFailure
  });
}

function loginUser(formObj: any, redirect: string = '/') {
  const request = postFormRequest(formObj, '');
  return genericAJAX('/user_token', request, {
    start: loginUserRequest,
    succeed: addRedirect(loginUserSuccess, redirect),
    fail: loginUserFailure
  });
}

function loginUserSuccess({ user, jwt }: any) {
  localStorage.setItem('token', jwt);
  localStorage.setItem('user', user);
  return {
    type: types.LOGIN_USER_SUCCESS,
    payload: {
      user: user,
      token: jwt
    }
  };
}

function loginUserFailure(error: any) {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  return {
    type: types.LOGIN_USER_FAILURE,
    payload: { error }
  };
}

function loginUserRequest() {
  return {
    type: types.LOGIN_USER_REQUEST
  };
}

function logoutUser() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  return {
    type: types.LOGOUT_USER
  };
}

const logoutAndRedirect = addRedirect(logoutUser, '/login');

export { registerUser, loginUser, logoutAndRedirect, loginUserSuccess, loginUserFailure, loginUserRequest, logoutUser };
