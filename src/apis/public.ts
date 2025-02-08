import axios from 'axios'
import { API_URL } from '~/configs/env'
import handleRequest from './request'
import { handleErrorResponse, handleResponse } from './response'

const http = axios.create({
  baseURL: API_URL.PUBLIC,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 30000,
  withCredentials: true
})

http.interceptors.request.use(handleRequest)
http.interceptors.response.use(handleResponse, handleErrorResponse)

export default http
