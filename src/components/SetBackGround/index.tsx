import { ChangeEvent, ReactNode, memo } from 'react'
import useUploadImage from '~/hooks/useUploadImageBB'
import { PhotoIcon } from '../Icons'

interface ISetBackGround {
  icon?: ReactNode
  handleBG: (bgImage: string) => void
}

const SetBackGround = ({ icon, handleBG }: ISetBackGround) => {
  const { handleUploadImage } = useUploadImage()

  const handleChangeBackground = async (e: ChangeEvent<HTMLInputElement>) => {
    const imageData = await handleUploadImage(e)
    handleBG(imageData.url)
  }

  return (
    <div className='absolute bottom-2 right-2'>
      <label className='flex items-center text-white gap-2 cursor-pointer p-2 bg-slate-500 bg-opacity-80 rounded-lg'>
        <input className='hidden' type='file' onChange={handleChangeBackground} />
        {icon}
        <span className='text-white text-xs'>Background</span>
      </label>
    </div>
  )
}

SetBackGround.defaultProps = {
  icon: <PhotoIcon />
}

export default memo(SetBackGround)
