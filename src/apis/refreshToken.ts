import { refreshToken } from '~/services/users'
import { getToken, removeToken, setToken } from '~/utils/handleToken'

const handleRefreshToken = async () => {
  const { refreshToken: rfToken } = getToken()

  if (!rfToken) return

  try {
    const data = await refreshToken(rfToken)
    setToken({ token: data.token, refreshToken: data.refreshToken })
  } catch (error) {
    removeToken()
  }
}

export default handleRefreshToken
