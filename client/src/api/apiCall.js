import { checkHttpStatus } from './checkHttpStatus';

const genericAJAX = (endpoint, request) => {
  return function(dispatch, getState) {
    const authToken = getState().auth.token;
    if (authToken !== undefined) {
      request.headers.Authorization = authToken;
    }
    return fetch(endpoint, request)
      .then(checkHttpStatus)
      .then(r => r.json());
  };
};
