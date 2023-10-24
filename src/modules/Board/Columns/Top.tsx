import { useMutation } from '@tanstack/react-query'
import { useCallback, memo } from 'react'
import { DotsEllipsisIcon } from '~/components/Icons'
import QUERY_KEY from '~/configs/reactQuery'
import { IProjectDetail } from '~/models/projectWorkSpace'
import { removeColumn } from '~/services/columns'
import useWorkSpace from '~/store/workSpace'
import AcrionCollection from '~/components/ActionCollection'
import useToggle from '~/hooks/useToggle'

const ColumnTop = ({ name, columnId }: { name: string; columnId: string }) => {
  const { show, handleShow } = useToggle()
  const board = useWorkSpace((state) => state.projectDetail)
  const setBoard = useWorkSpace((state) => state.setProjectDetail)

  const { mutate } = useMutation({
    mutationKey: [QUERY_KEY.REMOVE_COLUMN],
    mutationFn: (columnId: string) => removeColumn(columnId)
  })

  const closeAction = useCallback(() => {
    handleShow(false)
  }, [show])

  const handleRemoveColumn = useCallback(() => {
    if (!board) return

    const newColumns = board.columns.filter((column) => column._id !== columnId)

    const newboard: IProjectDetail = {
      ...board,
      columns: newColumns
    }

    mutate(columnId, {
      onSuccess: () => {
        setBoard(newboard)
      }
    })
  }, [board, columnId])

  return (
    <h3 className='mb-4 text-base bg-white rounded-lg p-3 shadow-boxSecondary flex justify-between'>
      <span className='cursor-pointer'>{name || 'Todo column'}</span>
      <div className='cursor-pointer relative'>
        <span onClick={() => handleShow(!show)}>
          <DotsEllipsisIcon />
        </span>

        {show && (
          <AcrionCollection title='Remove this column' handleRemove={handleRemoveColumn} closeAction={closeAction} />
        )}
      </div>
    </h3>
  )
}

export default memo(ColumnTop)
