import { DATA_REDUCER_KEY, REQUEST_REDUCER_KEY } from './constants';
import dataReducer from './data.reducer';
import requestReducer from './request.reducer';

const reducers = {
  [REQUEST_REDUCER_KEY]: requestReducer,
  [DATA_REDUCER_KEY]: dataReducer
};

export default reducers;
