import { useMutation } from '@tanstack/react-query'
import { useState, useCallback } from 'react'
import AddCollection from '~/components/AddCollection'
import QUERY_KEY from '~/configs/reactQuery'
import { typeCard } from '~/enums/card'
import useToggle from '~/hooks/useToggle'
import { IProjectDetail } from '~/models/projectWorkSpace'
import { addCard } from '~/services/cards'
import useWorkSpace from '~/store/workSpace'
import { ResponseCreateCard, ResquestCreateCard } from '~/types/projects'

const AddCard = ({ columnId }: { columnId: string }) => {
  const { show, handleShow } = useToggle()
  const [title, setTitle] = useState('')

  const board = useWorkSpace((state) => state.projectDetail)
  const setBoard = useWorkSpace((state) => state.setProjectDetail)

  const { mutate, isLoading } = useMutation({
    mutationKey: [QUERY_KEY.ADD_CARD],
    mutationFn: (payload: ResquestCreateCard) => addCard(payload)
  })

  const handleAddColumn = useCallback(() => {
    if (!board) return

    const newCard: ResquestCreateCard = {
      boardId: `${board?._id}`,
      columnId: columnId,
      title: title,
      description: '',
      type: typeCard.primary
    }

    mutate(newCard, {
      onSuccess: (data: ResponseCreateCard) => {
        const newColumns = board.columns.map((column) => {
          if (column._id === columnId) {
            column.cards.push(data.card)
          }
          return column
        })

        if (!newColumns) return

        const newBoard: IProjectDetail = {
          ...board,
          columns: newColumns
        }

        handleShow(false)
        setBoard(newBoard)
      },
      onError: (error: any) => {
        console.log(error)
      }
    })
  }, [board, columnId, title])

  return (
    <AddCollection
      show={show}
      setShow={handleShow}
      placeholder='Enter a title for this card'
      title={isLoading ? '...loaiding' : 'Add Card'}
      setValue={setTitle}
      handleAddCollection={handleAddColumn}
    />
  )
}

export default AddCard
