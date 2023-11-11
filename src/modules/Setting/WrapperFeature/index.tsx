import { ReactNode, memo } from 'react'

interface IFeature {
  children: ReactNode
  title: string
  description: string
}

const Feature = ({ children, description = '', title = '' }: IFeature) => {
  return (
    <div className='flex gap-20 border-b py-5'>
      <div className='max-w-[300px] w-full'>
        <h3 className='opacity-90'>{title}</h3>
        <p className='text-text1 opacity-70 font-medium text-xs'>{description}</p>
      </div>
      {children}
    </div>
  )
}

export default memo(Feature)
