import { useCallback, useState } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '~/components/Error'
import WrapLogin from '~/components/WrapLogin'
import { Login, SignIn } from '~/modules/Login'

const LoginPage = () => {
  const [isToLogin, setIsToLogin] = useState(false)

  const handleShowLogin = useCallback((value: boolean) => setIsToLogin(value), [isToLogin])

  return (
    <WrapLogin>
      {!isToLogin ? <SignIn handleShowLogin={handleShowLogin} /> : <Login handleShowLogin={handleShowLogin} />}
    </WrapLogin>
  )
}

export default withErrorBoundary(LoginPage, {
  FallbackComponent: ErrorComponent
})
