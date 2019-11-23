import axios from 'axios';

const url = process.env.BASE_URL || "";

axios.defaults.baseURL = `${url}/api`;
axios.defaults.headers.post['Content-Type'] = 'application/json';

// Add a request interceptor
axios.interceptors.request.use(async function (config) {

  // if(!!userToken) {
  //   config.headers.authorization = `Bearer ${userToken}`;
  // }

  if (config.method === 'post' && config.url === `/users`) {
    delete config.headers['authorization']
  }

  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  
  return response;
}, function (error) {
  return Promise.reject(error);
});

export const config = {
  url : url
}