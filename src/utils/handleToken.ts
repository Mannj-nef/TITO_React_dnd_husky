import Cookies from 'js-cookie'
import { CookieAttributes } from 'node_modules/@types/js-cookie'

const tokenKey = 'token'
const refreshTokenKey = 'refreshToken'

const objConfigCookies: CookieAttributes = {
  expires: 7,
  domain: '',
  path: '/'
}

export const setToken = ({ token, refreshToken }: { token: string; refreshToken: string }) => {
  Cookies.set(tokenKey, token, objConfigCookies)
  Cookies.set(refreshTokenKey, refreshToken, objConfigCookies)
}

export const removeToken = () => {
  Cookies.remove(tokenKey, objConfigCookies)
  Cookies.remove(refreshTokenKey, objConfigCookies)
}

export const getToken = () => {
  const token = Cookies.get(tokenKey)
  const refreshToken = Cookies.get(refreshTokenKey)

  return { token, refreshToken }
}
