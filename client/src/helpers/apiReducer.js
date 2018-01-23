import * as types from './actionTypes';
import merge from 'lodash/merge';

const reducer = (state = {}, { type, payload }) => {
  switch (type) {
    case types.API_GET_SUCCESS:
      return merge({}, state, merge({}, payload.data));
    default:
      return state;
  }
};

export default reducer;
