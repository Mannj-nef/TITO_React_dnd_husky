import { ReactNode, memo } from 'react'
import { useNavigate } from 'react-router'
import ROUTER from '~/configs/router'
import { CloseIcon } from '../Icons'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '../Error'

interface IWapLogin {
  children: ReactNode
}

const WrapLogin = ({ children }: IWapLogin) => {
  const navigate = useNavigate()

  return (
    <div className='absolute w-screen h-screen'>
      <div
        className='overlay fixed w-screen h-screen bg-black bg-opacity-40 cursor-pointer'
        onClick={() => navigate(ROUTER.LOGIN.path)}
      ></div>

      <div className='middle-absolute md:mx-4 xs:w-screen xs:h-screen md:w-[500px] xl:w-[600px] 2xl:w-[600px] md:max-h-[650px] xl:max-h-[650px] 2xl:max-h-[650px] min-h-[300px] h-full bg-white md:rounded-xl xl:rounded-lg 2xl:rounded-lg py-8 xs:px-2 md:p-8 xl:p-10 2xl:p-10 shadow-xl z-10'>
        <span
          className='cursor-pointer absolute top-2 left-2  w-9 h-9  rounded-full flex items-center justify-center hover:bg-slate-300 transition-opacity'
          onClick={() => navigate(ROUTER.LOGIN.path)}
        >
          <CloseIcon />
        </span>

        {children}
      </div>
    </div>
  )
}

export default withErrorBoundary(memo(WrapLogin), {
  FallbackComponent: ErrorComponent
})
