import { ReactNode } from 'react'

interface IWtappLogin {
  children: ReactNode
}

const WrappLogin = ({ children }: IWtappLogin) => {
  return <div className='middle-absolute w-[600px] h-[300px]  bg-blue-400 '>{children}</div>
}

export default WrappLogin
