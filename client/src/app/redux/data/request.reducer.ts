import * as events from '../events';
import { DataModule } from '../types';

const initialRequest = { succeeded: false, error: null, loading: false, exists: true, requests: {} };

const REQUEST_ACTIONS = [
  events.JSON_API_FAILURE,
  events.JSON_API_SUCCESS,
  events.JSON_API_REQUEST,
  events.JSON_API_CACHE_SUCCESS
];

const singleRequestReducer = (state: {}, action: DataModule.ApiActions) => {
  switch (action.type) {
    case events.JSON_API_REQUEST:
      return { loading: true, succeeded: false, error: null, response: {} };
    case events.JSON_API_SUCCESS:
      return { loading: false, succeeded: true, error: null, response: action.payload.response };
    case events.JSON_API_FAILURE:
      return { loading: false, succeeded: false, error: action.payload.error, response: {} };
    case events.JSON_API_CACHE_SUCCESS:
      return { loading: false, succeeded: true, error: null, response: action.payload.response };
    default:
      return state;
  }
};

const allRequestsReducer = (state = {}, action: DataModule.ApiActions) => {
  switch (action.type) {
    case events.JSON_API_REQUEST:
    case events.JSON_API_SUCCESS:
    case events.JSON_API_FAILURE:
    case events.JSON_API_CACHE_SUCCESS:
      return { ...state, [action.payload.request]: singleRequestReducer(state[action.payload.request], action) };
    default:
      return state;
  }
};

const endpointReducer = (state = initialRequest, action: DataModule.ApiActions) => {
  switch (action.type) {
    case events.JSON_API_REQUEST:
      return { ...state, loading: true, requests: allRequestsReducer(state.requests, action) };
    case events.JSON_API_SUCCESS:
      return {
        ...state,
        loading: false,
        succeeded: true,
        error: null,
        last: action.payload.request,
        requests: allRequestsReducer(state.requests, action)
      };
    case events.JSON_API_FAILURE:
      return {
        ...state,
        loading: false,
        succeeded: false,
        error: action.payload.error,
        requests: allRequestsReducer(state.requests, action)
      };
    case events.JSON_API_CACHE_SUCCESS:
      return {
        ...state,
        loading: false,
        succeeded: true,
        last: action.payload.request,
        requests: allRequestsReducer(state.requests, action)
      };
    default:
      return state;
  }
};

const masterReducer = (state = {}, action) => {
  if (action.payload && action.payload.endpoint && REQUEST_ACTIONS.indexOf(action.type) !== -1) {
    return { ...state, [action.payload.endpoint]: endpointReducer(state[action.payload.endpoint], action) };
  } else {
    return state;
  }
};

export default masterReducer;
