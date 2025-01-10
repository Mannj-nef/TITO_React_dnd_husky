import { memo } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '~/components/Error'
import { PlusIcon } from '~/components/Icons'
import useModal from '~/store/modal'

const ProjectCreate = () => {
  const setShowModal = useModal((state) => state.setShow)

  return (
    <>
      <div
        className='xs:h-[50px] h-[150px] relative cursor-pointer bg-slate-200 rounded-lg flex items-center justify-center'
        onClick={() => setShowModal()}
      >
        <div className='flex flex-col xs:flex-row justify-center items-center gap-3'>
          <span className='xs:p-1 p-3 bg-white rounded-full shadow-boxPrimary'>
            <PlusIcon />
          </span>
          <h3>Create project</h3>
        </div>
      </div>
    </>
  )
}

export default withErrorBoundary(memo(ProjectCreate), {
  FallbackComponent: ErrorComponent
})
