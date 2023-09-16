import axios, { AxiosError, AxiosResponse } from 'axios'
import { API_ENDPOINTS, HTTP_STATUS } from '~/configs/api'
import { removeToken, setToken } from '~/utils/handleToken'
import handleRefreshToken from './refreshToken'
import { toast } from 'react-toastify'

export const handleResponse = async (res: AxiosResponse) => {
  const { url } = res.config

  if (url === API_ENDPOINTS.LOGIN || url === API_ENDPOINTS.REGISTER) {
    const data = res.data

    if (data) {
      setToken({ token: data.token, refreshToken: data.refreshToken })
    }
  } else if (url === API_ENDPOINTS.LOGOUT) {
    removeToken()
  }
  return res
}

export const handleErrorResponse = async (error: AxiosError) => {
  const prevRequest = error.response as AxiosResponse
  const {
    status,
    config: { url }
  } = prevRequest

  if (![Number(HTTP_STATUS.UNPROCESSABLE_ENTITY), Number(HTTP_STATUS.FORBIDDEN)].includes(status)) {
    toast.error(prevRequest.data.message)
  }

  if (
    status === HTTP_STATUS.FORBIDDEN &&
    axios.isAxiosError(error) &&
    url !== API_ENDPOINTS.REFRESH_TOKEN
  ) {
    await handleRefreshToken()
  }
}
