const fieldApiGenerator = axiosInstance => ({
  getFields: () => axiosInstance.get('/fields')
});

export default fieldApiGenerator;
