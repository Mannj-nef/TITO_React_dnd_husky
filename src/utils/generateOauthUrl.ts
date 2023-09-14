import { OAUTH } from '~/configs/env/'

const generateOauthUrl = () => {
  const bodyData = {
    client_id: OAUTH.GOOGLE_CLIENT_ID,
    redirect_uri: OAUTH.GOOGLE_REDIRECT_SERVER,
    response_type: 'code',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ].join(' '),
    // state: 'pass-through value',
    access_type: 'offline',
    prompt: 'consent'
  }

  const queryString = new URLSearchParams(bodyData).toString()

  return `${OAUTH.GOOGLE_URL}?${queryString}`
}

export default generateOauthUrl
