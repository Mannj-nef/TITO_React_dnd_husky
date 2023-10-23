import { CSSProperties, memo, useMemo } from 'react'
import { AddCard, Card } from '..'
import ColumnTop from './Top'
import { useSortable, verticalListSortingStrategy, SortableContext } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import ICardModel from '~/models/card'
import IColumnModel from '~/models/column'
import { ACTIVE_DRAG_ITEM } from '~/enums/board'

interface IColumn {
  cards: ICardModel[]
  column: IColumnModel
}

const Column = ({ cards, column }: IColumn) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: column._id,
    data: {
      type: ACTIVE_DRAG_ITEM.COLUMN,
      column
    }
  })

  const dndKitCardStyle: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition: transition,
    height: '100%',
    opacity: isDragging ? '0.5' : '1'
  }

  const cardIds = useMemo(() => cards?.map((card) => card?._id), [cards])

  return (
    <div
      className='w-[250px] rounded-lg flex-shrink-0 flex flex-col pointer-events-auto mb-2 py-2 -my-2 cursor-default'
      ref={setNodeRef}
      style={dndKitCardStyle}
    >
      <div {...attributes} {...listeners} className='cursor-grab'>
        <ColumnTop columnId={column._id} name={column.name} />
      </div>

      <div className='h-fit flex flex-col gap-3 overflow-y-auto pb-2 px-1 -mx-1'>
        <SortableContext items={cardIds} strategy={verticalListSortingStrategy}>
          {!!cards.length && cards.map((card) => <Card key={card._id} card={card} />)}
        </SortableContext>
      </div>

      <AddCard columnId={column._id} />
    </div>
  )
}

export default memo(Column)
