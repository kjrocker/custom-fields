import checkHttpStatus from './checkHttpStatus';

const apiCall = (endpoint, request) => {
  return (dispatch, getState) => {
    const authToken = getState().auth.token;
    if (authToken !== null) {
      request.headers.Authorization = authToken;
    }
    return new Promise((resolve, reject) => {
      fetch(endpoint, request)
        .then(checkHttpStatus)
        .then(r => r.json())
        .then(resolve)
        .catch(reject);
    });
  };
};

export default apiCall;
