import { memo } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '~/components/Error'
import useUser from '~/store/user'

const TopProfile = () => {
  const user = useUser((state) => state.user)

  return (
    <div className='flex relative mb-10'>
      <div className='absolute left-0 -translate-y-1/2'>
        <div className='w-32 h-32 p-1 rounded-2 rounded-full bg-white shadow-boxPrimary'>
          <img
            className='w-full h-full object-cover rounded-full'
            src={user?.avatar}
            alt={user?.name}
          />
        </div>
      </div>

      <div className='ml-[140px]'>
        <div>
          <h3 className='text-xl'>{user?.name}</h3>
          <p className='text-text1 italic opacity-70'>{user?.email}</p>
        </div>
      </div>
    </div>
  )
}

export default withErrorBoundary(memo(TopProfile), {
  FallbackComponent: ErrorComponent
})
