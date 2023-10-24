import { memo } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '~/components/Error'
import { PlusIcon } from '~/components/Icons'
import useUser from '~/store/user'
import { handleGetDate as getDate } from '~/utils/getDate'

const DashBoardTop = () => {
  const user = useUser((state) => state.user)

  return (
    <div className='flex justify-between'>
      <div>
        <h1 className='text-4xl'>DashBoard</h1>
        <span className='text-xs font-semibold '>{getDate()}</span>
      </div>

      <div className='flex items-center gap-3'>
        <span className='cursor-pointer bg-white rounded-full shadow-boxPrimary'>
          <PlusIcon />
        </span>
        <div className='w-12 h-12 left-0 top-0 p-1 bg-white shadow-boxPrimary rounded-full'>
          <img
            src={user?.avatar}
            className='block w-full h-full object-cover rounded-full cursor-pointer'
            alt={user?.name}
          />
        </div>
      </div>
    </div>
  )
}

export default withErrorBoundary(memo(DashBoardTop), {
  FallbackComponent: ErrorComponent
})
