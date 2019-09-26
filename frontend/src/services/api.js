import axios from 'axios';

const api = axios.create({
  baseURL: 'https://heroku-node-api-tests.herokuapp.com/api',
});

export default api;
