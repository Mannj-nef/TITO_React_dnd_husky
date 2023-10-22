import { memo } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '~/components/Error'
import { PlusIcon } from '~/components/Icons'
import { GREEN_CREATE } from '~/mocks/images'
import useModal from '~/store/modal'

const DashBoardCreateWorkPage = () => {
  const setShowModal = useModal((state) => state.setShow)

  return (
    <div className='h-full rounded-lg overflow-hidden relative cursor-pointer' onClick={() => setShowModal()}>
      <div className='overlay bg-blackToWhite absolute w-full h-full'></div>

      <div className='h-full max-h-[100px]'>
        <img src={GREEN_CREATE} className='w-full h-full block object-cover' alt='green' />
      </div>

      <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  flex gap-3 font-semibold'>
        <span className='text-white'>
          <PlusIcon />
        </span>

        <span className='capitalize text-white flex-shrink-0 '>Create workpage</span>
      </div>
    </div>
  )
}

export default withErrorBoundary(memo(DashBoardCreateWorkPage), {
  FallbackComponent: ErrorComponent
})
