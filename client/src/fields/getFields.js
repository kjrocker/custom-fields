import { fieldApi } from '../api';
import { promiseDispatcher } from 'redux-promise-dispatch';
import { jsonApiSuccess as apiSuccess, jsonApiFailure as apiFailure } from '../helpers/jsonApiActions';

export default promiseDispatcher(fieldApi.getFields, { success: apiSuccess, failure: apiFailure });
