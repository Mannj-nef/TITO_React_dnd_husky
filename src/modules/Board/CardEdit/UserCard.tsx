import { PlusIcon, UsersIcon } from '~/components/Icons'
import useModal from '~/store/modal'
import GetMember from './GetMember'
import { memo } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '~/components/Error'

const UserCard = () => {
  const cardEdit = useModal((state) => state.cardEdit)

  const isShowMemberCardEdit = useModal((state) => state.isShowMemberCardEdit)
  const setShowMemberCardEdit = useModal((state) => state.setShowMemberCardEdit)

  if (!cardEdit) return

  return (
    <div className='edit-card-operation'>
      <div className='edit-card-lable'>
        <UsersIcon />
        <span>Assignee</span>
      </div>

      <>
        {!!cardEdit.members?.length &&
          cardEdit.members.map((people) => (
            <div key={people._id} className='flex items-center gap-2'>
              <div className='w-8 h-8 overflow-hidden rounded-full'>
                <img className='w-full h-full object-cover' src={people.avatar} alt={people.name} />
              </div>
            </div>
          ))}

        <div className='w-8 h-8 object-cover ml-3 rounded-full p-2 bg-white flex items-center justify-center shadow-boxPrimary cursor-pointer relative'>
          <div
            onClick={(e) => {
              e.stopPropagation()
              setShowMemberCardEdit()
            }}
          >
            <PlusIcon />
          </div>

          {isShowMemberCardEdit && <GetMember />}
        </div>
      </>
    </div>
  )
}

export default withErrorBoundary(memo(UserCard), {
  FallbackComponent: ErrorComponent
})
