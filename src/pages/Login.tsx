import { useCallback, useState } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '~/components/Error'
import WrappLogin from '~/components/WrappLogin'
import { Login, SignIn } from '~/modules/Login'

const LoginPage = () => {
  const [isTologin, setIsToLogin] = useState(false)

  const handleShowLogin = useCallback((value: boolean) => setIsToLogin(value), [isTologin])

  return (
    <WrappLogin>
      {!isTologin ? <SignIn handleShowLogin={handleShowLogin} /> : <Login handleShowLogin={handleShowLogin} />}
    </WrappLogin>
  )
}

export default withErrorBoundary(LoginPage, {
  FallbackComponent: ErrorComponent
})
