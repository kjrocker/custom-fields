import normalize from 'json-api-normalizer';
import * as types from './types';
import { fieldApi } from '../../api';
import { promiseDispatcher } from 'redux-promise-dispatch';

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

const jsonActions = { success: jsonApiSuccess, failure: jsonApiFailure };

const getFields = promiseDispatcher(fieldApi.getFields, jsonActions);

const getValidations = promiseDispatcher(fieldApi.getValidations, jsonActions);

const getTags = promiseDispatcher(fieldApi.getTags, jsonActions);

export { jsonApiSuccess, jsonApiRequest, jsonApiFailure, getFields, getValidations, getTags };
