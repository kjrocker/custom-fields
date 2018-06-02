import * as events from './events';

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

  export type ApiActions = ApiFailureAction | ApiRequestAction | ApiSuccessAction;
}

export { DataModule };
