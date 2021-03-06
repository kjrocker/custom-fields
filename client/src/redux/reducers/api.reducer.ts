import { types } from '../actions';
import { merge } from 'lodash';

const reducer = (state = {}, { type, payload }) => {
  switch (type) {
    case types.API_GET_SUCCESS:
      return merge({}, state, merge({}, payload.data));
    default:
      return state;
  }
};

export default reducer;
