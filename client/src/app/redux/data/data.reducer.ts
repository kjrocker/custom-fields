import normalize from 'json-api-normalizer';
import { mergeDeepRight } from 'ramda';
import * as events from '../events';

const dataReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case events.JSON_API_REQUEST:
      return state;
    case events.JSON_API_SUCCESS:
      return mergeDeepRight(normalize(payload.response), state);
    case events.JSON_API_FAILURE:
      return state;
    default:
      return state;
  }
};

export default dataReducer;
