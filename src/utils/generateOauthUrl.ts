import { API_ENDPOINTS } from '~/configs/api'
import { OAUTH } from '~/configs/env/'

const generateOauthUrl = () => {
  const bodyData = {
    client_id: OAUTH.GOOGLE_CLIENT_ID,
    redirect_uri: OAUTH.GOOGLE_REDIRECT_SERVER_URL,
    scope: [API_ENDPOINTS.OAUTH_USERINFO_EMAIL, API_ENDPOINTS.OAUTH_USERINFO_FROFILE].join(' '),
    // state: 'pass-through value',
    response_type: 'code',
    access_type: 'offline',
    prompt: 'consent'
  }

  const queryString = new URLSearchParams(bodyData).toString()

  return `${OAUTH.GOOGLE_URL}?${queryString}`
}

export default generateOauthUrl
