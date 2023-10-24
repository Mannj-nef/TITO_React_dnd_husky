import { memo } from 'react'
import { InboxIcon } from '~/components/Icons'

const DashBoardInbox = () => {
  return (
    <div className=' relative bg-slate-200 shadow-boxPrimary rounded-lg h-full p-5'>
      <h3 className='capitalize text-xl'>Inbox</h3>

      <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex gap-3 flex-col items-center'>
        <span>
          <InboxIcon />
        </span>
        <span>Empty</span>
      </div>
    </div>
  )
}

export default memo(DashBoardInbox)
