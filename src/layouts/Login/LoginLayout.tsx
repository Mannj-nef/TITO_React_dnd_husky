import { Outlet } from 'react-router'
import Button from '~/components/Button'

import imageBanner from '~/assets/images/banner-login-todo.jpg'

import ROUTER from '~/configs/router'
import { OuthLogin } from '~/modules/Login'

const LoginLayout = () => {
  return (
    <div className='flex h-screen overflow-hidden relative'>
      <div className='flex-1'>
        <img src={imageBanner} className='w-full h-full object-cover block' alt='' />
      </div>

      {/*  */}
      <div className='flex-1 flex items-center '>
        <div className='max-w-[660px] mx-auto px-5'>
          <h1 className='text-7xl font-bold mb-[46px] drop-shadow-xl'>Happening now</h1>
          <h2 className='text-3xl font-bold'>Join today.</h2>

          <div className=' max-w-[350px] mt-7'>
            <OuthLogin></OuthLogin>

            <Button href={ROUTER.LOGIN.SIGN_UP} className='w-full mt-4 text-white font-medium' type='primary'>
              Create account
            </Button>

            <p className='text-xs mt-2'>
              By registering, you agree to the <span className='text-primary cursor-pointer'>Terms of Service</span> and{' '}
              <span className='text-primary cursor-pointer'>Privacy Policy</span>, including{' '}
              <span className='text-primary cursor-pointer'>Cookie Use.</span>
            </p>

            <div className='mt-16'>
              <h3 className='font-bold text-lg'>Already have an account?</h3>

              <Button
                href={ROUTER.LOGIN.SIGN_IN}
                className='w-full mt-4 text-primary bg-white border-primary font-bold'
              >
                SignIn
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  )
}

export default LoginLayout
