import { serialize } from '../../../lib';
import { ReduxState as State, RequestModule } from '../types';
import { REQUEST_REDUCER_KEY } from './constants';

export const getRequestState = (state: State) => state[REQUEST_REDUCER_KEY];

export const getEndpoint = (state: State, name: string): RequestModule.Endpoint =>
  getRequestState(state)[name] || {
    exists: false,
    loading: false,
    succeeded: false,
    requests: {},
    error: null,
    last: ''
  };

export const getSingleRequest = (state: State, name: string, ...args: any[]): RequestModule.Request =>
  getEndpoint(state, name).requests[serialize(...args)] || undefined;
