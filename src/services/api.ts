import axios from 'axios';

export const BASE_URL = 'https://api-front-test.k8s.smarttbot.com/api/v1';

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
