import { ChangeEvent, memo } from 'react'
import { PhotoIcon } from '~/components/Icons'
import useUploadImage from '~/hooks/useUploadImageBB'
import useModal from '~/store/modal'

const SetBackGroundCard = () => {
  const cardEdit = useModal((state) => state.cardEdit)
  const setCardEdit = useModal((state) => state.setCardEdit)

  const { handleUploadImage } = useUploadImage()

  const handleSetBackGroundURL = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!cardEdit) return

    const imageData = await handleUploadImage(e)

    setCardEdit({
      ...cardEdit,
      imgUrl: imageData.url
    })
  }

  return (
    <div className='edit-card-operation'>
      <div className='edit-card-lable'>
        <PhotoIcon />
        <span>Background</span>
      </div>

      <label className='relative w-full max-w-[230px] cursor-pointer'>
        <input className='w-full h-full absolute hidden' onChange={handleSetBackGroundURL} type='file' />
        <div className='text-white bg-primary text-center text-sm !rounded-md !py-2 !px-3 w-full'>Background</div>
      </label>
    </div>
  )
}

export default memo(SetBackGroundCard)
