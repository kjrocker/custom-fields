import * as events from '../events';

const initialRequest = { succeeded: false, error: null, loading: false, exists: true };

const requestReducer = (state = initialRequest, action) => {
  const { type, payload } = action;
  switch (type) {
    case events.JSON_API_REQUEST:
      return { ...state, loading: true };
    case events.JSON_API_SUCCESS:
      return { ...state, loading: false, succeeded: true, error: null };
    case events.JSON_API_FAILURE:
      return { ...state, loading: false, succeeded: false, error: payload.error };
    default:
      return state;
  }
};

const masterReducer = (state = {}, action) => {
  if (action.payload.endpoint) {
    return { ...state, [action.payload.endpoint]: requestReducer(state[action.payload.endpoint], action) };
  } else {
    return state;
  }
};

export default masterReducer;
