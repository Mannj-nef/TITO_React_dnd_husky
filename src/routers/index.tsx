import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ROUTER from '~/configs/router'

// layout
import LoginLayout from '~/layouts/Login'
import MainLayout from '~/layouts/Main'

// page
const Login = lazy(() => import('~/pages/LogIn'))
const SignUp = lazy(() => import('~/pages/SignUp'))
const Home = lazy(() => import('~/pages/Home'))
const WorkSpace = lazy(() => import('~/pages/WorkSpace'))
const WorkSpaceDetail = lazy(() => import('~/pages/Board'))
const Setting = lazy(() => import('~/pages/Setting'))
const Calendar = lazy(() => import('~/pages/Calendar'))
const Profile = lazy(() => import('~/pages/Profile'))

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: ROUTER.HOME.path,
        element: <Home />
      },
      {
        path: ROUTER.WORKSPACE.path,
        element: <WorkSpace />
      },
      {
        path: ROUTER.WORKSPACE.DETAIL,
        element: <WorkSpaceDetail />
      },
      {
        path: ROUTER.CALENDAR.path,
        element: <Calendar />
      },
      {
        path: ROUTER.SETTING.path,
        element: <Setting />
      },
      {
        path: ROUTER.PROFILE.path,
        element: <Profile />
      }
    ]
  },
  {
    element: <LoginLayout />,
    path: ROUTER.LOGIN.path,
    children: [
      {
        path: ROUTER.LOGIN.SIGN_IN,
        element: <Login />
      },
      {
        path: ROUTER.LOGIN.SIGN_UP,
        element: <SignUp />
      }
    ]
  },

  {
    element: <>not fould</>,
    path: '*'
  }
])

export default router
