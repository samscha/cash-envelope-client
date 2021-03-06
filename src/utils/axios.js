import axios from 'axios';

const instance = axios.create();

instance.defaults.withCredentials = true;

let baseURL = '';

switch (process.env.NODE_ENV) {
  case 'production':
    baseURL = 'https://cash-envelope.herokuapp.com/';
    break;
  case 'development':
    baseURL = 'http://localhost:8888/';
    break;
  default:
    console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
}

instance.defaults.baseURL = baseURL;

instance.defaults.timeout = 10000;

export default instance;
