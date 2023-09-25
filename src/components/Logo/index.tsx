import { memo } from 'react'
import { Link } from 'react-router-dom'
import ROUTER from '~/configs/router'

interface ILogo {
  logo: string
  className?: string
  display?: string
  size?: 'xl' | 'lg'
}

const LogoApp = ({ logo, className, display = '', size = 'lg' }: ILogo) => {
  return (
    <Link
      className={`${display} block mx-[10px] mt-2 flex-shrink-0 ${className} ${
        size === 'lg' ? 'w-12 h-12' : 'w-32 h-32'
      } `}
      to={ROUTER.HOME.path}
    >
      <img src={logo} alt='' className='w-full h-full object-cover block rounded-lg' />
    </Link>
  )
}

export default memo(LogoApp)
