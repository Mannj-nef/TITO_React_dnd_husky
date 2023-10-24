import { useMemo, useEffect } from 'react'
import { AddColumn, BoardTop, Column, DragOverlayPortal, Skeleton } from '~/modules/Board'
import { DndContext } from '@dnd-kit/core'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'
import handleSensor from '~/utils/handleSensorDndKit'
import useDrag from '~/hooks/useDrag'

import { useQuery } from '@tanstack/react-query'
import { getProjectDetail } from '~/services/projects'
import { useParams } from 'react-router-dom'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '~/components/Error'
import QUERY_KEY from '~/configs/reactQuery'
import useWorkSpace from '~/store/workSpace'

const Board = () => {
  const { projectId } = useParams()
  const board = useWorkSpace((state) => state.projectDetail)
  const setProjectDetail = useWorkSpace((state) => state.setProjectDetail)

  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY.GET_BOARD_DETAIL, projectId],
    queryFn: () => getProjectDetail(`${projectId}`)
  })

  const sensors = handleSensor()

  const {
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    collisonDetectionsStrategy,
    ordreredColumns,
    activeCard,
    activeColumn,
    typeActiveDrag
  } = useDrag(board?.columns)

  const columnIds = useMemo(() => ordreredColumns.map((card) => card._id), [ordreredColumns])

  useEffect(() => {
    if (!data?.board) return

    setProjectDetail(data?.board)
  }, [data?.board])

  return (
    <>
      {isLoading ? (
        <Skeleton></Skeleton>
      ) : (
        <DndContext
          sensors={sensors}
          collisionDetection={collisonDetectionsStrategy}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
        >
          <div className='flex flex-col h-full'>
            <BoardTop />

            <div className='flex gap-4 h-full overflow-x-auto'>
              <SortableContext items={columnIds} strategy={horizontalListSortingStrategy}>
                {!!ordreredColumns.length &&
                  ordreredColumns.map((column) => (
                    <Column key={column._id} cards={column.cards} column={column}></Column>
                  ))}
              </SortableContext>

              <AddColumn />
            </div>
          </div>

          <DragOverlayPortal
            activeCard={activeCard}
            activeColumn={activeColumn}
            typeActiveDrag={typeActiveDrag}
          />
        </DndContext>
      )}
    </>
  )
}

export default withErrorBoundary(Board, {
  FallbackComponent: ErrorComponent
})
