import { ChangeEvent, memo, useCallback } from 'react'
import Button from '~/components/Button'
import Comments from './Comment'
import useModal from '~/store/modal'
import useWorkSpace from '~/store/workSpace'
import { useMutation } from '@tanstack/react-query'
import QUERY_KEY from '~/configs/reactQuery'
import { ResquestUpdateCard } from '~/types/projects'
import { updateCard } from '~/services/cards'
import { IProjectDetail } from '~/models/projectWorkSpace'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '~/components/Error'
import useToggle from '~/hooks/useToggle'

const Bottom = () => {
  const cardEdit = useModal((state) => state.cardEdit)
  const setCardEdit = useModal((state) => state.setCardEdit)
  const board = useWorkSpace((state) => state.projectDetail)
  const setBoard = useWorkSpace((state) => state.setProjectDetail)
  const resetModal = useModal((state) => state.resetModal)

  const { show: showComment, handleShow: setShowComment } = useToggle()

  const { mutate } = useMutation({
    mutationKey: [QUERY_KEY.UPDATE_CARD],
    mutationFn: (payload: ResquestUpdateCard) => updateCard(payload)
  })

  const hanelChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (!cardEdit) return
    setCardEdit({
      ...cardEdit,
      description: e.target.value
    })
  }

  const handleUpdateCard = useCallback(() => {
    if (!board || !cardEdit) return

    mutate(
      {
        _id: cardEdit._id,
        members: cardEdit.members,
        imgUrl: cardEdit.imgUrl,
        type: cardEdit.type,
        description: cardEdit.description,
        title: cardEdit?.title
      },
      {
        onSuccess: (data) => {
          const newColumns = board.columns.map((column) => {
            const result = column.cards.map((card) => {
              if (card._id === data.card._id) card = data.card
              return card
            })

            return {
              ...column,
              cards: result
            }
          })

          const newBoard: IProjectDetail = {
            ...board,
            columns: newColumns
          }

          setBoard(newBoard)
          resetModal()
        }
      }
    )
  }, [cardEdit, board])

  return (
    <>
      <div className='flex gap-10 mb-3'>
        <h3 className={`${!showComment ? 'text-primary' : ''} cursor-pointer`} onClick={() => setShowComment(false)}>
          Description
        </h3>
        <h3 className={`${showComment ? 'text-primary' : ''} cursor-pointer`} onClick={() => setShowComment(true)}>
          Comments
        </h3>
      </div>

      {!showComment ? (
        <>
          <textarea
            className='w-full p-3 outline-none border rounded-lg h-[150px] resize-none mt-3'
            value={cardEdit?.description || ''}
            onChange={hanelChangeDescription}
          />
          <Button className='text-white !rounded-xl mt-2 !py-1 !px-4' type='primary' onClick={handleUpdateCard}>
            Save
          </Button>
        </>
      ) : (
        <Comments />
      )}
    </>
  )
}

export default withErrorBoundary(memo(Bottom), {
  FallbackComponent: ErrorComponent
})
