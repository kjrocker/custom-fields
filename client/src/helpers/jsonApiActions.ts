import normalize from 'json-api-normalizer';
import * as types from './actionTypes';

const jsonApiSuccess = response => ({
  type: types.API_GET_SUCCESS,
  payload: { data: normalize(response) }
});

const jsonApiFailure = response => ({
  type: types.API_GET_SUCCESS,
  payload: {
    error: response
  }
});

const jsonApiRequest = request => ({
  type: types.API_GET_REQUEST,
  payload: request
});

export { jsonApiSuccess, jsonApiRequest, jsonApiFailure };
