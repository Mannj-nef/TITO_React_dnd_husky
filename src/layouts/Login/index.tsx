import { useEffect } from 'react'
import { Outlet } from 'react-router'
import ROUTER from '~/configs/router'
import { OauthLogin } from '~/modules/Login'
import { Link, useNavigate } from 'react-router-dom'
import { IMAGE_BANNER_LOGIN } from '~/mocks/images'
import { getToken } from '~/utils/handleToken'

const LoginLayout = () => {
  const { token } = getToken()
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) return
    navigate(ROUTER.HOME.path)
  }, [token])

  if (token) return

  return (
    <div className='flex h-screen overflow-hidden relative'>
      <div className='flex-1'>
        <img src={IMAGE_BANNER_LOGIN} className='w-full h-full object-cover block' alt='banner' />
      </div>

      <div className='flex-1 flex items-center '>
        <div className='max-w-[660px] mx-auto px-5'>
          <h1 className='text-7xl font-bold mb-[46px] drop-shadow-xl'>Happening now</h1>
          <h2 className='text-3xl font-bold'>Join today.</h2>

          <div className=' max-w-[350px] mt-7'>
            <OauthLogin />

            <Link to={ROUTER.LOGIN.SIGN_UP} className='btn w-full text-white font-medium bg-primary'>
              Create account
            </Link>

            <p className='text-xs mt-2'>
              By registering, you agree to the <span className='text-primary cursor-pointer'>Terms of Service</span> and{' '}
              <span className='text-primary cursor-pointer'>Privacy Policy</span>, including{' '}
              <span className='text-primary cursor-pointer'>Cookie Use.</span>
            </p>

            <div className='mt-16'>
              <h3 className='font-bold text-lg'>Already have an account?</h3>

              <Link
                to={ROUTER.LOGIN.SIGN_IN}
                className='btn w-full mt-4 text-primary bg-white border-primary font-bold'
              >
                SignIn
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  )
}

export default LoginLayout
