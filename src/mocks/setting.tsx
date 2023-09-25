import ROUTER from '~/configs/router'
import { DARK_THEME, LIGHT_THEME, SYSTEM_THEME } from './images'
import {
  CreditIcon,
  CubeIcon,
  DotsEllipsisIcon,
  ProfileIcon,
  RocketIcon,
  SparklesIcon,
  UsersIcon,
  WindowIcon
} from '~/components/Icons'

export const SETTING_LINKS = [
  {
    title: 'My details',
    icon: <RocketIcon />,
    to: ''
  },
  {
    title: 'Password',
    icon: <DotsEllipsisIcon />,
    to: ''
  },
  {
    title: 'Appearance',
    icon: <SparklesIcon />,
    to: ''
  },
  {
    title: 'Team',
    icon: <UsersIcon />,
    to: ''
  },
  {
    title: 'Billing',
    icon: <CreditIcon />,
    to: ''
  },
  {
    title: 'Application',
    icon: <WindowIcon />,
    to: ''
  },
  {
    title: 'Api',
    icon: <CubeIcon />,
    to: ''
  },
  {
    title: 'Profile',
    icon: <ProfileIcon />,
    to: ROUTER.PROFILE.path
  }
]

export const THEMES = [
  {
    id: 1,
    title: 'System preference',
    imgUrl: SYSTEM_THEME
  },
  {
    id: 2,
    title: 'light',
    imgUrl: LIGHT_THEME
  },
  {
    id: 3,
    title: 'dark',
    imgUrl: DARK_THEME
  }
]
