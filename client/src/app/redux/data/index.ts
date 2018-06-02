import dataReducer from './data.reducer';
import requestReducer from './request.reducer';

const reducers = {
  request: requestReducer,
  data: dataReducer
};

export default reducers;
