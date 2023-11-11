import { ReactNode, memo } from 'react'
import { useNavigate } from 'react-router'
import ROUTER from '~/configs/router'
import { CloseIcon } from '../Icons'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '../Error'

interface IWtappLogin {
  children: ReactNode
}

const WrappLogin = ({ children }: IWtappLogin) => {
  const navigate = useNavigate()

  return (
    <div className='absolute w-screen h-screen'>
      <div
        className='ovlay fixed w-screen h-screen bg-black bg-opacity-40 cursor-pointer'
        onClick={() => navigate(ROUTER.LOGIN.path)}
      ></div>

      <div className='middle-absolute w-[600px] max-h-[650px] min-h-0[300px] h-full bg-white rounded-xl p-8 shadow-xl z-10'>
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

export default withErrorBoundary(memo(WrappLogin), {
  FallbackComponent: ErrorComponent
})
