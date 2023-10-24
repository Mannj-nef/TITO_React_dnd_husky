import { memo, useCallback } from 'react'
import SetBackGround from '~/components/SetBackGround'
import { BACKGROUND_PROJILE } from '~/mocks/images'
import useUser from '~/store/user'

const CoverPhoto = () => {
  const user = useUser((state) => state.user)
  const setUser = useUser((state) => state.setUser)

  const handleSetBackground = useCallback(
    (bgImage: string) => {
      if (!user) return

      setUser({ ...user, background: bgImage })
    },
    [user]
  )

  return (
    <div className='relative'>
      <div className='w-full h-[150px]'>
        <img className='w-full h-full object-cover' src={user?.background || BACKGROUND_PROJILE} alt={user?.name} />
      </div>

      <SetBackGround handleBG={handleSetBackground} />
    </div>
  )
}

export default memo(CoverPhoto)
