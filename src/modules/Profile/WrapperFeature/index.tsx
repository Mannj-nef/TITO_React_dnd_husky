import { ReactNode, memo } from 'react'

interface IFeature {
  children: ReactNode
  title: string
  description: string
}

const Feature = ({ children, description = '', title = '' }: IFeature) => {
  return (
    <div className='flex py-5 gap-5 border-b-2'>
      <div className='w-[400px]'>
        <h4>{title}</h4>
        <p className='text-sm opacity-70'>{description}</p>
      </div>
      <div className='flex flex-col gap-5 w-[400px]'>{children}</div>
    </div>
  )
}

export default memo(Feature)
