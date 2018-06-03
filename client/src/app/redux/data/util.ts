import { promiseDispatcher } from 'redux-promise-dispatch';
import { EventualPromise, PromiseFunction } from 'redux-promise-dispatch/lib/types';
import { serialize } from '../../../lib';
import * as events from '../events';
import { getSingleRequest } from './request.selector';

export type MapActionOptions = { cache?: boolean };

export type MapAction = <F extends EventualPromise>(args: { name: string; method: F; options: MapActionOptions }) => F;

const createActions = (name) => ({
  request: (...args) => ({ type: events.JSON_API_REQUEST, payload: { endpoint: name, request: serialize(args) } }),
  success: (response, ...args) => ({
    type: events.JSON_API_SUCCESS,
    payload: { endpoint: name, request: serialize(args), response }
  }),
  failure: (error, ...args) => ({
    type: events.JSON_API_FAILURE,
    payload: { endpoint: name, request: serialize(args), error }
  })
});

const cacheSuccess = (name, response, ...args) => ({
  type: events.JSON_API_CACHE_SUCCESS,
  payload: { name, response, request: serialize(args) }
});

const defaultOptions = { cache: false };

export const mapAction = <F extends EventualPromise>({
  name,
  method,
  options
}: {
  name: string;
  method: F;
  options: MapActionOptions;
}): F => {
  const myOptions = { ...defaultOptions, ...options };
  const baseAction = promiseDispatcher(method, createActions(name));
  if (!myOptions.cache) {
    return baseAction;
  } else {
    const singleExecuteFn = (...args: any[]): PromiseFunction => async (dispatch, getState) => {
      const requestStatus = getSingleRequest(getState(), name, ...args);
      if (requestStatus && requestStatus.succeeded) {
        const response = requestStatus.response;
        dispatch(cacheSuccess(name, response, ...args));
        return Promise.resolve(requestStatus.response);
      } else {
        return dispatch(baseAction(...args));
      }
    };
    return singleExecuteFn as F;
  }
};

export const mapApi = <T>(api: T, options?: MapActionOptions): T =>
  Object.keys(api).reduce(
    (acc, val) => ({ ...acc, [val]: mapAction({ name: val, method: api[val], options }) }),
    {}
  ) as T;
