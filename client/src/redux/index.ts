import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import apiReducer from './reducers/api.reducer';
import authReducer from './reducers/auth.reducer';

const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  data: apiReducer,
  auth: authReducer
});

export default reducers;
