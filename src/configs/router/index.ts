const ROUTER = {
  HOME: {
    path: '/',
    name: 'Home'
  },
  PROFILE: {
    path: '/profile',
    name: 'Profile'
  },
  WORKSPACE: {
    path: '/workspace',
    name: 'Workspace',
    DETAIL: '/workspace/:projectId'
  },
  CALENDAR: {
    path: '/calendar',
    name: 'Calendar'
  },
  SETTING: {
    path: '/setting',
    name: 'Setting'
  },
  LOGIN: {
    path: '/login',
    SIGN_IN: '/login/sign-in',
    SIGN_UP: '/login/sign-up'
  }
} as const

export default ROUTER
