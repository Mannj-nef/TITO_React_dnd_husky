import { memo, useCallback, MouseEvent } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '~/components/Error'
import GetMembers from '~/components/GetMembers'
import useModal from '~/store/modal'

const GetMember = () => {
  const cardEdit = useModal((state) => state.cardEdit)
  const setCardEdit = useModal((state) => state.setCardEdit)
  const setShowMemberCardEdit = useModal((state) => state.setShowMemberCardEdit)

  const setmemberToCard = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!cardEdit) return

      e.stopPropagation()

      setCardEdit({
        ...cardEdit,
        members: cardEdit.members
      })

      setShowMemberCardEdit()
    },
    [cardEdit]
  )
  return (
    <div className='absolute z-10 w-[250px] h-[200px] bg-white shadow-boxThird top-full left-full rounded-lg  overflow-y-auto'>
      <GetMembers handleMember={setmemberToCard} />
    </div>
  )
}

export default withErrorBoundary(memo(GetMember), {
  FallbackComponent: ErrorComponent
})
