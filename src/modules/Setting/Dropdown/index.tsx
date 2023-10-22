import { memo } from 'react'
import { DownIcon } from '~/components/Icons'

const Dropdown = () => {
  return (
    <div className='border-2 rounded-lg p-3 w-[250px] cursor-pointer  flex items-center justify-between'>
      <span>Recent changes</span>
      <div className='p-1 w-7 h-3 flex items-center'>
        <DownIcon />
      </div>
    </div>
  )
}

export default memo(Dropdown)
