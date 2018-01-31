import normalize from 'json-api-normalizer';
import { promiseDispatcher } from 'redux-promise-dispatch';
import { apiCall } from '../api';
import * as types from './actionTypes';

const getEndpoint = endpoint => {
  const request = {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: {}
  };
  return apiCall(endpoint, request);
};

const apiSuccess = response => ({
  type: types.API_GET_SUCCESS,
  payload: { data: normalize(response) }
});

const apiFailure = response => ({
  type: types.API_GET_SUCCESS,
  payload: {
    error: response
  }
});

const apiRequest = request => ({
  type: types.API_GET_REQUEST,
  payload: request
});

export default promiseDispatcher(getEndpoint, { success: apiSuccess, failure: apiFailure });
