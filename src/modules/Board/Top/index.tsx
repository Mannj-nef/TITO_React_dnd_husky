import { memo, useState, useRef, useCallback, useMemo, useEffect } from 'react'
import GetMembers from '~/components/GetMembers'
import { PlusIcon, SettingIcon } from '~/components/Icons'
import Portal from '~/components/Portal'
import useUser from '~/store/user'

import useWorkSpace from '~/store/workSpace'
import { BoardEdit } from '..'
import useToggle from '~/hooks/useToggle'

const quantityMemberShow = 7

const BoardTop = () => {
  const { show: showGetUser, handleShow: setShowGetUser } = useToggle()
  const { show: ShowEditBoard, handleShow: setShowEdditBoard } = useToggle()

  const [positionGetUser, setPositionGetUser] = useState({
    top: 0,
    left: 0,
    height: 0
  })

  const plusElementRef = useRef<HTMLDivElement>(null)

  const user = useUser((state) => state.user)
  const projectDetail = useWorkSpace((state) => state.projectDetail)

  const remainingUsers = useMemo(
    () => (projectDetail ? projectDetail.members?.length - quantityMemberShow : 0),
    [projectDetail]
  )

  const handleSetShowBoardEdit = useCallback(
    (value: boolean) => {
      setShowEdditBoard(value)
    },
    [ShowEditBoard]
  )

  useEffect(() => {
    if (!plusElementRef.current) return
    const element = plusElementRef.current
    const { top, left, height } = element.getBoundingClientRect()

    setPositionGetUser({
      top: Math.ceil(top),
      left: Math.ceil(left),
      height: Math.ceil(height)
    })
  }, [plusElementRef])

  return (
    <>
      <div className='flex justify-between items-center mb-2 p-2'>
        <div className='flex items-center gap-5'>
          <h1 className='text-xl'>{projectDetail?.name}</h1>
          <span className='cursor-pointer' onClick={() => handleSetShowBoardEdit(true)}>
            <SettingIcon />
          </span>
        </div>

        <div className='flex gap-4 items-center'>
          <div className='flex'>
            {!!projectDetail?.members?.length &&
              projectDetail.members.slice(0, quantityMemberShow).map((member) => (
                <div key={member._id} className='w-8 h-8 shadow-boxPrimary rounded-full overflow-hidden -ml-2'>
                  <img
                    src={member.avatar || user?.avatar}
                    className='block w-full h-full object-cover cursor-pointer'
                    alt={member.name || user?.name}
                  />
                </div>
              ))}

            {remainingUsers > 0 && (
              <div className=' w-8 h-8 object-cover rounded-full p-2 bg-disabled flex items-center justify-center shadow-boxPrimary cursor-pointer'>
                <PlusIcon />
                <span className='text-xs'>{remainingUsers}</span>
              </div>
            )}
          </div>

          <div
            ref={plusElementRef}
            className='w-8 h-8 relative object-cover rounded-full p-2 bg-white flex items-center justify-center shadow-boxPrimary cursor-pointer'
            onClick={() => setShowGetUser(true)}
          >
            <PlusIcon />
          </div>
        </div>
      </div>

      {showGetUser && (
        <Portal>
          <div className='fixed top-0 bottom-0 left-0 right-0' onClick={() => setShowGetUser(false)}>
            <div
              className='absolute flex flex-col w-[250px] h-[200px] bg-white shadow-boxThird rounded-lg  overflow-y-auto'
              style={{
                top: positionGetUser.top + positionGetUser.height,
                left: positionGetUser.left - 250
              }}
            >
              <GetMembers handleMember={() => {}} />
            </div>
          </div>
        </Portal>
      )}

      {ShowEditBoard && (
        <Portal>
          <div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-20 bg-black bg-opacity-60'>
            <BoardEdit setShow={handleSetShowBoardEdit} />

            <div className='overlay absolute -z-10  w-full h-full' onClick={() => handleSetShowBoardEdit(false)}></div>
          </div>
        </Portal>
      )}
    </>
  )
}

export default memo(BoardTop)
