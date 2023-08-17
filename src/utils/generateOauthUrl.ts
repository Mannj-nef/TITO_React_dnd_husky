const generateOauthUrl = () => {
  const { VITE_GOOGLE_AOUTH_URL, VITE_GOOGLE_OAUTH_CLIENT_ID, VITE_GOOGLE_AOUTH_REDIRECT_SERVER } = import.meta.env as {
    [key: string]: string
  }

  const bodyData = {
    client_id: VITE_GOOGLE_OAUTH_CLIENT_ID,
    redirect_uri: VITE_GOOGLE_AOUTH_REDIRECT_SERVER,
    response_type: 'code',
    scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'].join(
      ' '
    ),
    // state: 'pass-through value',
    access_type: 'offline',
    prompt: 'consent'
  }

  const queryString = new URLSearchParams(bodyData).toString()

  return `${VITE_GOOGLE_AOUTH_URL}?${queryString}`
}

export default generateOauthUrl
