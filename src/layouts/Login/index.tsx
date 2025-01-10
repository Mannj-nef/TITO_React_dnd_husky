import { ReactNode } from 'react'
import ROUTER from '~/configs/router'
import { OauthLogin } from '~/modules/Login'
import { Link } from 'react-router-dom'
import { IMAGE_BANNER_LOGIN } from '~/mocks/images'
import { getToken } from '~/utils/handleToken'

const LoginLayout = ({ children }: { children: ReactNode }) => {
  const { token } = getToken()

  if (token) return

  return (
    <div className='flex h-screen overflow-hidden relative'>
      <div className='flex-1 hidden xl:block 2xl:block'>
        <img src={IMAGE_BANNER_LOGIN} className='w-full h-full object-cover block' alt='' />
      </div>

      <div className='flex-1 flex items-center'>
        <div className='max-w-[660px] mx-auto px-5'>
          <div className='xs:text-center md:text-left'>
            <h1 className='xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-bold mb-1 md:mb-4 lg:mb-6 xl:mb-6 2xl:mb-8 drop-shadow-xl'>
              Happening now
            </h1>
            <h2 className='xs:text-2xl sm:text-3xl md:text-3xl lg:text-3xl 2xl:text-3xl font-bold'>Join today.</h2>
          </div>

          <div className='max-w-[350px] mt-7'>
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

      {children}
    </div>
  )
}

export default LoginLayout
