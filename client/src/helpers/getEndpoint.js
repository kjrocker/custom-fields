import normalize from 'json-api-normalizer';
import { genericAJAX } from './asyncActions';
import * as types from './actionTypes';

function getEndpoint(endpoint) {
  const request = {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: {}
  };
  return genericAJAX(endpoint, request, {
    start: apiRequest,
    succeed: apiSuccess,
    fail: apiFailure
  });
}

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

export default getEndpoint;
