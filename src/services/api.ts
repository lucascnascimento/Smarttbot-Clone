import axios from 'axios'

//todo: Change jsonplaceholder url to smarttbot url
const api = axios.create({baseURL: 'https://jsonplaceholder.typicode.com/'})

export default api