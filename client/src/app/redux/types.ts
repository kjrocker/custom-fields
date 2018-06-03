import { DATA_REDUCER_KEY, REQUEST_REDUCER_KEY } from './data/constants';
import * as events from './events';

export type ReduxState = {
  [DATA_REDUCER_KEY]: any;
  [REQUEST_REDUCER_KEY]: RequestModule.State;
};

declare namespace DataModule {
  export interface ApiSuccessAction {
    type: typeof events.JSON_API_SUCCESS;
    payload: { endpoint: string; request: string; response: object };
  }

  export interface ApiFailureAction {
    type: typeof events.JSON_API_FAILURE;
    payload: { endpoint: string; request: string; error: any };
  }

  export interface ApiRequestAction {
    type: typeof events.JSON_API_REQUEST;
    payload: { endpoint: string; request: string };
  }

  export interface ApiCacheAction {
    type: typeof events.JSON_API_CACHE_SUCCESS;
    payload: { endpoint: string; request: string; response: any };
  }

  export type ApiActions = ApiFailureAction | ApiRequestAction | ApiSuccessAction | ApiCacheAction;
}

declare namespace RequestModule {
  export type State = Record<string, Endpoint>;

  export interface Endpoint {
    exists: boolean;
    succeeded: boolean;
    loading: boolean;
    error: any;
    last: string;
    requests: Record<string, RequestModule.Request>;
  }

  export interface Request {
    loading: boolean;
    succeeded: boolean;
    error: any;
    response: any;
  }
}

export { DataModule, RequestModule };
