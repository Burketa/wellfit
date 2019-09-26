import axios from 'axios';

const api = axios.create({
  baseURL: 'https://heroku-node-api-tests.herokuapp.com/api',
  //baseURL: 'localhost:3000/api',
});

export default api;
