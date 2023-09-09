const API_ENDPOINTS = {
  // user
  ME: '/me',
  LOGIN: '/user/login',
  REGISTER: '/user/register',
  UPDATE_ME: '/user/update',
  LOGOUT: '/user/logout',
  SENT_EMAIL_FORGOT_PASSWORD: '/user/sent-email-password',
  FORGOT_PASSWORD: '/user/forgot-password',
  REFRESH_TOKEN: '/user/refresh-token',

  //   board
  BOARD: '/board',
  BOARD_ID: '/board/:id'
} as const

export default API_ENDPOINTS
