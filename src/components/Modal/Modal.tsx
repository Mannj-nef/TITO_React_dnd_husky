import { ReactNode, memo, useCallback } from 'react'
import Portal from '../Portal'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '../Error'
import useModal from '~/store/modal'

const Modal = ({ children }: { children: ReactNode }) => {
  const isShow = useModal((state) => state.isShow)
  const setShow = useModal((state) => state.setShow)
  const resetModal = useModal((state) => state.resetModal)

  const handleReset = () =>
    useCallback(() => {
      setShow()
      resetModal()
    }, [isShow])

  return (
    <Portal>
      {isShow && (
        <div className='fixed z-30 top-0 bottom-0 left-0 right-0 '>
          <div
            className='ovlay -z-10 bg-black bg-opacity-50 absolute w-full h-full cursor-pointer'
            onClick={handleReset}
          ></div>
          {children}
        </div>
      )}
    </Portal>
  )
}

export default withErrorBoundary(memo(Modal), {
  FallbackComponent: ErrorComponent
})
