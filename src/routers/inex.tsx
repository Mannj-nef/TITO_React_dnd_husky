import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

// layout
import LoginLayout from '~/layouts/Login'

import MainLayout from '~/layouts/Main'

// page
const LoginPage = lazy(() => import('~/pages/Login'))
const HomePage = lazy(() => import('~/pages/Home'))

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      }
    ]
  },
  {
    element: <LoginLayout />,
    path: '/login',
    children: [
      {
        path: '/login/sign-in',
        element: <LoginPage />
      }
    ]
  }
])

export default router
