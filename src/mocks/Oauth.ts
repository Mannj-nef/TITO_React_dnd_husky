import generateOauthUrl from '~/utils/generateOauthUrl'
import { APPLE_ICON, GOOGLE_ICON } from './images'

export const Oauth2 = [
  {
    id: 1,
    href: generateOauthUrl(),
    icon: GOOGLE_ICON,
    title: 'Login with Google'
  },
  {
    id: 2,
    href: '',
    icon: APPLE_ICON,
    title: 'Login with Apple'
  }
]
