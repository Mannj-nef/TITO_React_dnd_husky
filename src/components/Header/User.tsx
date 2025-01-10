import { useRef, useState, useLayoutEffect, memo } from 'react'
import useUser from '~/store/user'
import Portal from '../Portal'
import Logout from '../Logout'
import { LogoutIcon, ProfileIcon } from '../Icons'
import ROUTER from '~/configs/router'
import { Link } from 'react-router-dom'
import useToggle from '~/hooks/useToggle'
import { AVATAR_DEFAULT } from '~/mocks/images'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '../Error'

const space = 10

const User = () => {
  const user = useUser((state) => state.user)

  const nodeRef = useRef<HTMLDivElement>(null)

  const { show: showAction, handleShow: setShowAction } = useToggle()

  const [position, setPosition] = useState({
    top: 0,
    right: 0
  })

  useLayoutEffect(() => {
    if (!nodeRef.current) return

    const element = nodeRef.current
    const { top, height, right } = element.getBoundingClientRect()

    setPosition({
      top: Math.ceil(top + height + space),
      right: Math.ceil(screen.width - right)
    })
  }, [nodeRef.current])

  return (
    <>
      <div ref={nodeRef} className='flex gap-2 items-center mr-5 cursor-pointer' onClick={() => setShowAction(true)}>
        <div className='w-10 h-10 flex-shrink-0'>
          <img
            src={user?.avatar || AVATAR_DEFAULT}
            className='w-full h-full block object-cover rounded-lg'
            alt={user?.name}
          />
        </div>
        <div className='leading-4'>
          <p className='font-semibold xs:text-xs'>{user?.name.slice(0, 20)}</p>
          <span className='xs:text-xs text-sm text-slate-400'>Member</span>
        </div>
      </div>

      {showAction && (
        <Portal>
          <div className='fixed z-10 top-0 bottom-0 left-0 right-0'>
            <div className='overlay absolute w-full h-full cursor-pointer' onClick={() => setShowAction(false)}></div>

            <div
              className='bg-white w-[250px] flex flex-col gap-3 absolute p-3 rounded-lg'
              style={position}
              onClick={() => setShowAction(false)}
            >
              <Link
                className='flex gap-2 w-full justify-start items-center bg-slate-200 rounded-lg py-2 px-3'
                to={ROUTER.PROFILE.path}
              >
                <span className='w-7 h-7 p-1 flex items-center justify-center'>
                  <ProfileIcon />
                </span>
                <span>Profile</span>
              </Link>

              <Logout className='flex gap-3 w-full !justify-start'>
                <LogoutIcon />
              </Logout>
            </div>
          </div>
        </Portal>
      )}
    </>
  )
}

export default withErrorBoundary(memo(User), {
  FallbackComponent: ErrorComponent
})
