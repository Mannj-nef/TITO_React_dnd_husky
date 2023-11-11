import { memo } from 'react'
import { TODO_TEMPLATE } from '~/mocks/images'

const DashBoardTemplate = () => {
  return (
    <div className='h-full rounded-lg overflow-hidden relative cursor-pointer'>
      <div className='overlay bg-blackToWhite absolute w-full h-full'></div>
      <div className='h-full max-h-[340px]'>
        <img src={TODO_TEMPLATE} className='w-full h-full block object-cover' alt='todo-template' />
      </div>

      <h3 className='capitalize absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white text-3xl text-center'>
        template gallery
      </h3>
    </div>
  )
}

export default memo(DashBoardTemplate)
