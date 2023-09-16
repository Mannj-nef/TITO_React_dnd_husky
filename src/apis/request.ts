import { InternalAxiosRequestConfig } from 'axios'
import { getToken } from '~/utils/handleToken'

const handleRequest = (config: InternalAxiosRequestConfig) => {
  const { token } = getToken()

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
}

export default handleRequest
