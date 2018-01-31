export default response => {
  return new Promise((resolve, reject) => {
    if (response.status >= 200 && response.status < 300) {
      resolve(response);
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      reject(error);
    }
  });
};
