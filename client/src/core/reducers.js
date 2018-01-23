import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import { reducer as authReducer } from '../auth';
import { apiReducer } from '../helpers';

const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  data: apiReducer,
  auth: authReducer
});

export default reducers;
