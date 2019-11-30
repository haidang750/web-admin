import axios from 'axios';

const url = process.env.BASE_URL || "https://webttcn.herokuapp.com";

axios.defaults.baseURL = `${url}/v1`;
axios.defaults.headers.post['Content-Type'] = 'application/json';

// Add a request interceptor
axios.interceptors.request.use(async function (config) {
  const userToken = localStorage.getItem('@admin_token');
  if(!!userToken) {
    config.headers.authorization = `Bearer ${userToken}`;
  }
  if (config.method === 'post' && (config.url === `/users` || config.url === `/auth`)) {
    delete config.headers['authorization']
  }

  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

export const config = {
  url : url
}