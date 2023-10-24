import { memo, useCallback } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '~/components/Error'
import SetBackGround from '~/components/SetBackGround'
import useModal from '~/store/modal'

const BackGround = () => {
  const cardEdit = useModal((state) => state.cardEdit)
  const setCardEdit = useModal((state) => state.setCardEdit)

  const handleChangeBackgroundURL = useCallback(
    (bgImage: string) => {
      if (!cardEdit) return

      setCardEdit({
        ...cardEdit,
        imgUrl: bgImage
      })
    },
    [cardEdit]
  )

  return (
    <div className='relative'>
      <div className='h-[150px]'>
        <img className='w-full h-full object-cover ' src={cardEdit?.imgUrl} alt={cardEdit?.title} />
      </div>

      <SetBackGround handleBG={handleChangeBackgroundURL} />
    </div>
  )
}

export default withErrorBoundary(memo(BackGround), {
  FallbackComponent: ErrorComponent
})
