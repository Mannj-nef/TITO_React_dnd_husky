import {
  CalendarIcon,
  DarkModeIcon,
  DashboardIcon,
  FolderIcon,
  LogoutIcon,
  ProfileIcon,
  SettingIcon
} from '~/components/Icons'
import ROUTER from '~/configs/router'

const NAVBAR_LINK = [
  {
    title: ROUTER.HOME.name,
    icon: <DashboardIcon />,
    to: ROUTER.HOME.path
  },

  {
    title: ROUTER.CALENDAR.name,
    icon: <CalendarIcon />,
    to: ROUTER.CALENDAR.path
  },
  {
    title: ROUTER.SETTING.name,
    icon: <SettingIcon />,
    to: ROUTER.SETTING.path
  },
  {
    title: ROUTER.PROFILE.name,
    icon: <ProfileIcon />,
    to: ROUTER.PROFILE.path
  }
]

export const WORKSPACE = {
  title: ROUTER.WORKSPACE.name,
  icon: <FolderIcon />,
  to: ROUTER.WORKSPACE.path
}

export const LOG_OUT = {
  title: 'Logout',
  icon: <LogoutIcon />
}

export const DARK_MODE = {
  title: 'Light/Dark',
  icon: <DarkModeIcon />
}

export default NAVBAR_LINK
