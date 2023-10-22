import { memo } from 'react'
import Button from '~/components/Button'

const Premium = () => {
  return (
    <div className='absolute bottom-5 bg-warning -m-3 p-5 w-full  rounded-bl-2xl'>
      <p className='font-semibold text-2xl'>Get even more perspective with Workspace views</p>
      <p className='font-semibold opacity-70 italic'>
        Premium Workspaces can combine boards into Table and Calendar to filter, sort, and get more
        done.
      </p>
      <Button className='!rounded-xl text-white bg-primary border-none mt-3'>Premium</Button>
    </div>
  )
}

export default memo(Premium)
