import { memo } from 'react'
import { DownIcon, LeftIcon, RightIcon } from '~/components/Icons'
import { handleGetDate } from '~/utils/getDate'

const NOW = handleGetDate()

const CalendarTop = () => {
  return (
    <div className='mt-3 flex xs:flex-col xs:items-start items-center gap-3'>
      <div className='p-2 border-2 rounded-lg max-w-[180px] w-full flex items-center justify-between'>
        <span>{NOW}</span>
        <div className='w-8 h-4 p-2 flex items-center'>
          <DownIcon />
        </div>
      </div>
      <div className='flex gap-1 items-center'>
        <div className='bg-slate-200 p-2 rounded-lg'>
          <LeftIcon />
        </div>
        <div className='bg-slate-200 py-2 rounded-lg px-4 font-semibold'>Today</div>
        <div className='bg-slate-200 p-2 rounded-lg'>
          <RightIcon />
        </div>
        |
        <div className='bg-slate-200 py-2 rounded-lg px-4 font-semibold flex items-center'>
          <span>week</span>
          <div className='w-8 h-4 p-2 flex items-center'>
            <DownIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(CalendarTop)
