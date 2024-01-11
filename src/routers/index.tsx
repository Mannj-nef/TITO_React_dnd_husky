import { lazy, Suspense } from 'react'
import { Navigate, Outlet, createBrowserRouter } from 'react-router-dom'
import ROUTER from '~/configs/router'
import { getToken } from '~/utils/handleToken'

// layout
import LoginLayout from '~/layouts/Login'
import MainLayout from '~/layouts/Main'

// page
const Login = lazy(() => import('~/pages/Login'))
const SignUp = lazy(() => import('~/pages/SignUp'))
const Home = lazy(() => import('~/pages/Home'))
const WorkSpace = lazy(() => import('~/pages/WorkSpace'))
const WorkSpaceDetail = lazy(() => import('~/pages/Board'))
const Setting = lazy(() => import('~/pages/Setting'))
const Calendar = lazy(() => import('~/pages/Calendar'))
const Profile = lazy(() => import('~/pages/Profile'))

const ProtectedRoute = () => {
  const { token } = getToken()

  return token ? (
    <MainLayout>
      <Suspense>
        <Outlet />
      </Suspense>
    </MainLayout>
  ) : (
    <Navigate to={ROUTER.LOGIN.path} />
  )
}

const RejectedRoute = () => {
  const { token } = getToken()

  return !token ? (
    <LoginLayout>
      <Suspense>
        <Outlet />
      </Suspense>
    </LoginLayout>
  ) : (
    <Navigate to={ROUTER.HOME.path} />
  )
}

const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
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
    element: <RejectedRoute />,
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
