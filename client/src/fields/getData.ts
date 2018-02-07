import { fieldApi } from '../api';
import { promiseDispatcher } from 'redux-promise-dispatch';
import { jsonApiSuccess as apiSuccess, jsonApiFailure as apiFailure } from '../helpers/jsonApiActions';

const jsonActions = { success: apiSuccess, failure: apiFailure };

const getFields = promiseDispatcher(fieldApi.getFields, jsonActions);

const getValidations = promiseDispatcher(fieldApi.getValidations, jsonActions);

const getTags = promiseDispatcher(fieldApi.getTags, jsonActions);

export { getFields, getValidations, getTags };
