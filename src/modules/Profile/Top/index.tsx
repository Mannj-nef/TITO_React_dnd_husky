import { ChangeEvent, memo, MouseEvent } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '~/components/Error'
import { DeleteIcon } from '~/components/Icons'
import useUploadImage from '~/hooks/useUploadImageBB'
import { AVATAR_DEFAULT } from '~/mocks/images'
import { IUser } from '~/models/user'
import useUser from '~/store/user'

const TopProfile = () => {
  const user = useUser((state) => state.user) as IUser
  const setUser = useUser((state) => state.setUser)

  const { imageURL, setImageURL, handleUploadImage } = useUploadImage()

  const handleChangeImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const imageData = await handleUploadImage(e)

    setUser({ ...user, avatar: imageData.url })
  }

  const handleClearImage = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()

    setImageURL(null)
    setUser({ ...user, avatar: '' })
  }

  return (
    <div className='flex relative mb-10'>
      <div className='absolute left-0 -translate-y-1/2'>
        <div className='w-32 h-32 p-1 rounded-2 rounded-full bg-white shadow-boxPrimary'>
          <label className='cursor-pointer relative'>
            {imageURL ? (
              <img className='w-full h-full object-cover rounded-full' src={imageURL} alt={user?.name} />
            ) : (
              <>
                <input type='file' onChange={handleChangeImage} className='hidden' />
                <img
                  className='w-full h-full object-cover rounded-full'
                  src={user?.avatar || AVATAR_DEFAULT}
                  alt={user?.name}
                />
              </>
            )}
          </label>

          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-white p-1 rounded-full bg-opacity-70 cursor-pointer ${
              imageURL || user?.avatar ? 'block' : 'hidden'
            }`}
            onClick={handleClearImage}
          >
            <DeleteIcon />
          </div>
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
