import { ReactNode, memo } from 'react'

interface IFeature {
  children: ReactNode
  title: string
  description: string
}

const Feature = ({ children, description = '', title = '' }: IFeature) => {
  return (
    <div className='flex flex-wrap justify-between gap-y-2 border-b py-5'>
      <div className='2xl:max-w-[250px] 2xl:w-full w-fit'>
        <h3 className='opacity-90'>{title}</h3>
        <p className='text-text1 opacity-70 font-medium text-xs'>{description}</p>
      </div>
      {children}
    </div>
  )
}

export default memo(Feature)
