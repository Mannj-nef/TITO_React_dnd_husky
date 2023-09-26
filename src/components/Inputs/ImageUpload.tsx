import { ChangeEvent, memo } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '../Error'
import { IMAGE_UPLOAD } from '~/mocks/images'
import { DeleteIcon } from '../Icons'
import useUploadImage from '~/hooks/useUploadImageBB'

interface IImageUpload {
  inputClassName?: string
  height?: number
  setBackGroundUploadUrl: (files: string | null) => void
}

const ImageUpload = ({ setBackGroundUploadUrl, inputClassName, height = 170 }: IImageUpload) => {
  const { imageURL, setImageURL, handleUploadImage } = useUploadImage()

  const handleChangeImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const imageData = await handleUploadImage(e)
    setBackGroundUploadUrl(imageData.url)
  }

  return (
    <div className='relative rounded-lg overflow-hidden' style={{ height }}>
      <label className='cursor-pointer'>
        {imageURL ? (
          <>
            <div className='ovelay w-full h-full absolute bg-black bg-opacity-40'></div>

            <div className='w-full h-full'>
              <img src={imageURL} alt='' className='w-full h-full object-cover' />
            </div>
          </>
        ) : (
          <>
            <input
              type='file'
              onChange={handleChangeImage}
              className={`hidden ${inputClassName}`}
              disabled={!!imageURL}
            />

            <div className='flex flex-col items-center text-center pointer-events-none border p-5 '>
              <div className='max-w-[80px] mb-5'>
                <img src={IMAGE_UPLOAD} alt='upload-img' className='w-full h-full object-cover' />
              </div>
              <p className='font-semibold'>Choose photo</p>
            </div>
          </>
        )}
      </label>
      <div
        className={`absolute top-3 right-3 bg-white p-1 rounded-full bg-opacity-70 cursor-pointer ${
          !imageURL ? 'hidden' : 'block'
        }`}
        onClick={() => setImageURL(null)}
      >
        <DeleteIcon />
      </div>
    </div>
  )
}

export default withErrorBoundary(memo(ImageUpload), {
  FallbackComponent: ErrorComponent
})
