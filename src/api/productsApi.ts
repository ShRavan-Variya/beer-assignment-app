import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://punkapi.online/v3/',
  timeout: 60000
});

API.interceptors.request.use(
  function (_config: any) {
    return _config;
  },
  function (error) {
    // console.log('API ERROR :: ' + JSON.stringify(error));
  }
);

API.interceptors.response.use(
  function (response: any) {
    return response;
  },
  async function (error: any) {
    return error;
  }
);
