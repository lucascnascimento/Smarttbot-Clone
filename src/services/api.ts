import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-front-test.k8s.smarttbot.com/api/v1',
});

export default api;
