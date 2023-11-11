import http from '~/apis/public'
import { API_ENDPOINTS } from '~/configs/api'
import {
  RequestLogin,
  RequestRegister,
  RequestUpdateMe,
  ResponseGetMe,
  ResponseLogin,
  ResponseLogout,
  ResponseRefreshToken,
  ResponseRegister,
  ResponseUpdateMe
} from '~/types/users'
import { getToken } from '~/utils/handleToken'

export const getMe = async () => {
  const { token, refreshToken } = getToken()

  if (!token && !refreshToken) return null

  const { data } = await http.get<ResponseGetMe>(API_ENDPOINTS.ME)

  return data
}

export const register = async (payload: RequestRegister) => {
  const { data } = await http.post<ResponseRegister>(API_ENDPOINTS.REGISTER, payload)

  return data
}

export const login = async (payload: RequestLogin) => {
  const { data } = await http.post<ResponseLogin>(API_ENDPOINTS.LOGIN, payload)

  return data
}

export const logout = async (refreshToken: string) => {
  const { data } = await http.post<ResponseLogout>(API_ENDPOINTS.LOGOUT, { refreshToken })

  return data
}

export const refreshToken = async (refreshToken: string) => {
  const { data } = await http.post<ResponseRefreshToken>(API_ENDPOINTS.REFRESH_TOKEN, {
    refreshToken
  })

  return data
}

export const updateMe = async (payload: RequestUpdateMe) => {
  const { data } = await http.patch<ResponseUpdateMe>(API_ENDPOINTS.UPDATE_ME, payload)

  return data
}
