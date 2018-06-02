import { promiseDispatcher } from 'redux-promise-dispatch';
import { EventualPromise } from 'redux-promise-dispatch/lib/types';
import { serialize } from '../../../lib';
import * as events from '../events';

export type MapActionOptions = { cache: boolean };

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

export const mapAction: MapAction = ({ name, method, options }) => {
  const baseAction = promiseDispatcher(method, createActions(name));
  if (!options.cache) {
    return baseAction;
  } else {
    return baseAction;
  }
};

export const mapApi = <T>(api: T, options?: MapActionOptions): T =>
  Object.keys(api).reduce(
    (acc, val) => ({ ...acc, [val]: mapAction({ name: val, method: api[val], options }) }),
    {}
  ) as T;
