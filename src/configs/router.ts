const ROUTER = {
  HOME: {
    path: '/'
  },
  LOGIN: {
    path: '/login',
    SIGN_IN: '/login/sign-in',
    SIGN_UP: '/login/sign-up'
  }
} as const

export default ROUTER
