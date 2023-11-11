import { memo } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import useModal from '~/store/modal'
import { CloseIcon, ExtendIcon } from '~/components/Icons'
import ErrorComponent from '~/components/Error'
import BackGround from './BackGround'
import RemoveCard from './RemoveCard'
import SetTitle from './SetTitle'
import UserCard from './UserCard'
import SetBackGroundCard from './SetBackGroundCard'
import Bottom from './Bottom'
import SetType from './setType'

const CardEdit = () => {
  const cardEdit = useModal((state) => state.cardEdit)
  const isShowMemberCardEdit = useModal((state) => state.isShowMemberCardEdit)
  const isShowTypeCardEdit = useModal((state) => state.isShowTypeCardEdit)

  const resetModal = useModal((state) => state.resetModal)
  const setShowTypeCardEdit = useModal((state) => state.setShowTypeCardEdit)
  const setShowMemberCardEdit = useModal((state) => state.setShowMemberCardEdit)

  const handleResetAction = () => {
    if (isShowMemberCardEdit) {
      setShowMemberCardEdit()
    }

    if (isShowTypeCardEdit) {
      setShowTypeCardEdit()
    }
  }

  return (
    <div
      className='mx-auto rounded-lg h-contentModal bg-white w-[650px]  relative top-1/2 -translate-y-1/2 overflow-y-scroll'
      onClick={handleResetAction}
    >
      {cardEdit?.imgUrl && <BackGround />}

      <span
        className={`absolute right-2 top-6 cursor-pointer w-6 h-6  rounded-full flex items-center justify-center  transition-opacity  ${
          cardEdit?.imgUrl ? 'text-white hover:bg-slate-500' : 'text-text1 hover:bg-slate-200'
        }`}
        onClick={() => resetModal()}
      >
        <div className='w-4 h-4 flex items-center justify-center'>
          <CloseIcon />
        </div>
      </span>

      <div className='p-5'>
        {/* Top */}
        <div className='top'>
          <div className='flex justify-between items-center'>
            <h3 className='flex items-center gap-5 text-2xl'>
              <ExtendIcon />
              <p>{cardEdit?.title}</p>
            </h3>

            <div className='mr-5'>
              <RemoveCard />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className='content mt-10 '>
          <div className='flex gap-3 flex-col'>
            <SetTitle />

            <UserCard />

            <SetType />

            {!cardEdit?.imgUrl && <SetBackGroundCard />}
          </div>

          <div className='mt-10 bg-slate-200 p-5 rounded-xl'>
            <Bottom />
          </div>
        </div>
      </div>
    </div>
  )
}

export default withErrorBoundary(memo(CardEdit), {
  FallbackComponent: ErrorComponent
})
