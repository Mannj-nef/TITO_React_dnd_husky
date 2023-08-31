import axios from 'axios'
import { API_URL } from '~/configs/env'
import { interceptors } from './interceptor'

const http = axios.create({
  baseURL: API_URL.PUBLIC,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 30000
})

http.interceptors.request.use(interceptors)
http.interceptors.response.use((res) => res.data)
