import { useMutation } from '@tanstack/react-query'
import { useState, useCallback } from 'react'
import AddCollection from '~/components/AddCollection'
import QUERY_KEY from '~/configs/reactQuery'
import useToggle from '~/hooks/useToggle'
import { IProjectDetail } from '~/models/projectWorkSpace'
import { addColumn } from '~/services/columns'
import useWorkSpace from '~/store/workSpace'
import { ResponseCreateColumn, ResquestCreateColumn } from '~/types/projects'

const AddColumn = () => {
  const { show, handleShow } = useToggle()
  const [columnName, setColumnName] = useState('')
  const board = useWorkSpace((state) => state.projectDetail)
  const setBoard = useWorkSpace((state) => state.setProjectDetail)

  const { mutate, isLoading } = useMutation({
    mutationKey: [QUERY_KEY.ADD_COLUMN],
    mutationFn: (payload: ResquestCreateColumn) => addColumn(payload)
  })

  const handleAddColumn = useCallback(() => {
    if (!board) return

    const newColumn: ResquestCreateColumn = {
      boardId: board._id,
      columnName
    }

    mutate(newColumn, {
      onSuccess: (data: ResponseCreateColumn) => {
        const newBoard: IProjectDetail = {
          ...board,
          columns: [...board.columns, data.column]
        }

        handleShow(false)
        setBoard(newBoard)
      },
      onError: (error: any) => {
        console.log(error)
      }
    })
  }, [board, columnName])

  return (
    <AddCollection
      show={show}
      setShow={handleShow}
      placeholder='Column name'
      title={isLoading ? '...loading' : 'Add new Column'}
      setValue={setColumnName}
      handleAddCollection={handleAddColumn}
    />
  )
}

export default AddColumn
