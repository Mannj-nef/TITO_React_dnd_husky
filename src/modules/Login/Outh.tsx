import googleIcon from '~/assets/icons/Google-Icon-PNG_rwscww.png'
import appleIcon from '~/assets/icons/apple-logo-icon.png'

import { Link } from 'react-router-dom'
import generateOauthUrl from '~/utils/generateOauthUrl'

const oauthUrl = generateOauthUrl()

const Outh2 = [
  {
    id: 1,
    href: oauthUrl,
    icon: googleIcon,
    title: 'Login with Google'
  },
  {
    id: 2,
    href: '',
    icon: appleIcon,
    title: 'Login with Apple'
  }
]

const Outh = () => {
  return (
    <div className='flex flex-col justify-between items-center gap-4'>
      {Outh2.map((item) => (
        <Link key={item.id} to={item.href} className='btn bg-white text-slate-800 w-full font-medium'>
          <div className='flex items-center gap-2 justify-center w-full'>
            <div className='w-5 h-5'>
              <img src={item.icon} className='w-full h-full object-cover block' alt='' />
            </div>

            {item.title}
          </div>
        </Link>
      ))}

      <p className='w-full text-center border leading-[0.1px]'>
        <span className='bg-white px-3'>or</span>
      </p>
    </div>
  )
}

export default Outh
