import { memo } from 'react'
import { ArrowTrendingUpIcon } from '~/components/Icons'
import { DIGITSL_SCREENS } from '~/mocks/images'

const DashBoardAutomation = () => {
  return (
    <div className='h-full rounded-lg overflow-hidden relative cursor-pointer'>
      <div className='h-full max-h-[340px]'>
        <img src={DIGITSL_SCREENS} className='w-full h-full block object-cover' alt='' />
      </div>

      <div className='absolute bottom-0 w-full bg-black bg-opacity-70 p-3 rounded-t-3xl'>
        <h3 className='text-white capitalize mb-3'>convert with automations</h3>

        <p className='text-slate-500 text-xs'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque sunt molestias maiores pariatur quod
          repudiandae corrupti nam?
        </p>

        <div className='flex justify-between items-center mt-3'>
          <span className='text-white underline underline-offset-4'>Live Detail</span>
          <span className='text-white p-1 border border-white rounded-lg'>
            <ArrowTrendingUpIcon />
          </span>
        </div>
      </div>
    </div>
  )
}

export default memo(DashBoardAutomation)
