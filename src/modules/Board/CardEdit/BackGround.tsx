import { ChangeEvent, memo } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '~/components/Error'
import { PhotoIcon } from '~/components/Icons'
import useUploadImage from '~/hooks/useUploadImageBB'
import useModal from '~/store/modal'

const BackGround = () => {
  const cardEdit = useModal((state) => state.cardEdit)
  const setCardEdit = useModal((state) => state.setCardEdit)

  const { handleUploadImage } = useUploadImage()

  const handleChangeBackgroundURL = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!cardEdit) return

    const imageData = await handleUploadImage(e)

    setCardEdit({
      ...cardEdit,
      imgUrl: imageData.url
    })
  }

  return (
    <div className='relative'>
      <div className='h-[150px]'>
        <img className='w-full h-full object-cover ' src={cardEdit?.imgUrl} alt='' />
      </div>

      <div className='absolute bottom-2 right-2'>
        <label className='flex items-center text-white gap-2 cursor-pointer p-2 bg-slate-500 bg-opacity-80 rounded-lg'>
          <input className='hidden' type='file' onChange={handleChangeBackgroundURL} />
          <PhotoIcon />
          <span className='text-white text-xs'>Background</span>
        </label>
      </div>
    </div>
  )
}

export default withErrorBoundary(memo(BackGround), {
  FallbackComponent: ErrorComponent
})
