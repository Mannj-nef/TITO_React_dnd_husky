import { DotsEllipsisIcon, PhotoIcon } from '~/components/Icons'
import ActionCollection from '~/components/ActionCollection'
import { memo, useCallback, useEffect, useRef, useState } from 'react'
import Portal from '~/components/Portal'
import { useMutation } from '@tanstack/react-query'
import QUERY_KEY from '~/configs/reactQuery'
import { deleteCard } from '~/services/cards'
import useModal from '~/store/modal'
import useWorkSpace from '~/store/workSpace'
import { IProjectDetail } from '~/models/projectWorkSpace'
import useToggle from '~/hooks/useToggle'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '~/components/Error'

const RemoveCard = () => {
  const cardEdit = useModal((state) => state.cardEdit)
  const setCardEdit = useModal((state) => state.setCardEdit)
  const resetModal = useModal((state) => state.resetModal)
  const board = useWorkSpace((state) => state.projectDetail)
  const setBoard = useWorkSpace((state) => state.setProjectDetail)

  const actionRef = useRef<HTMLDivElement>(null)

  const { show, handleShow } = useToggle()

  const [position, setPosition] = useState({
    top: 0,
    left: 0
  })

  const { mutate } = useMutation({
    mutationKey: [QUERY_KEY.REMOVE_CARD],
    mutationFn: (cardId: string) => deleteCard(cardId)
  })

  const closeAction = useCallback(() => {
    handleShow(false)
  }, [show])

  const handleRemoveColumn = useCallback(() => {
    if (!cardEdit || !board) return

    mutate(cardEdit._id, {
      onSuccess: () => {
        const newColumn = board?.columns.map((column) => {
          const newCards = column.cards.filter((card) => card._id !== cardEdit._id)
          return {
            ...column,
            cards: newCards
          }
        })

        const newBoard: IProjectDetail = {
          ...board,
          columns: newColumn
        }

        setBoard(newBoard)
        resetModal()
      }
    })
  }, [cardEdit, board])

  const handleRemoveBackground = () => {
    if (!cardEdit) return

    setCardEdit({
      ...cardEdit,
      imgUrl: ''
    })
  }

  useEffect(() => {
    if (!actionRef.current) return
    const element = actionRef.current
    const { top, left, width } = element.getBoundingClientRect()

    setPosition({
      top: Math.ceil(top),
      left: window.innerWidth > 1100 ? Math.ceil(left + 80) : Math.ceil(left - 200 + width)
    })
  }, [window.innerWidth])

  return (
    <div className='cursor-pointer relative'>
      <div ref={actionRef} onClick={() => handleShow(!show)}>
        <DotsEllipsisIcon />
      </div>

      {show && (
        <Portal>
          <div className='w-full fixed z-40' style={position}>
            <ActionCollection title='Remove this card' handleRemove={handleRemoveColumn} closeAction={closeAction}>
              {cardEdit?.imgUrl && (
                <p
                  className='flex items-center gap-4 text-sm font-normal p-2 hover:bg-slate-200 cursor-pointer'
                  onClick={handleRemoveBackground}
                >
                  <PhotoIcon />
                  <span>Remove backGround</span>
                </p>
              )}
            </ActionCollection>
          </div>
        </Portal>
      )}
    </div>
  )
}

export default withErrorBoundary(memo(RemoveCard), {
  FallbackComponent: ErrorComponent
})
