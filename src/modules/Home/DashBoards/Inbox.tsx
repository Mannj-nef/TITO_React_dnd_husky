import { memo } from 'react'
import { InboxIcon } from '~/components/Icons'

const DashBoardInbox = () => {
  return (
    <div className=' relative bg-slate-200 shadow-boxPrimary rounded-lg h-full xs:p-4 p-5'>
      <h3 className='capitalize text-sm md:text-xl lg:text-xl 2xl:text-xl'>Inbox</h3>

      <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex gap-1 md:gap-2 lg:gap-3 2xl:gap-3 flex-col items-center'>
        <span>
          <InboxIcon />
        </span>
        <span>Empty</span>
      </div>
    </div>
  )
}

export default memo(DashBoardInbox)
