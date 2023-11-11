import { DragOverlay, DropAnimation, defaultDropAnimationSideEffects } from '@dnd-kit/core'
import Portal from '~/components/Portal'
import ICardModel from '~/models/card'
import IColumnModel from '~/models/column'
import { Card, Column } from '..'
import { ACTIVE_DRAG_ITEM } from '~/enums/board'

interface IDragOverLay {
  typeActiveDrag: string | undefined
  activeColumn: IColumnModel | undefined
  activeCard: ICardModel | undefined
}

const DragOverlayPortal = ({ activeCard, activeColumn, typeActiveDrag }: IDragOverLay) => {
  const customStyleDropAnimation: DropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: '0.5'
        }
      }
    })
  }

  return (
    <Portal>
      <DragOverlay dropAnimation={customStyleDropAnimation}>
        {!typeActiveDrag && null}
        {activeColumn && typeActiveDrag === ACTIVE_DRAG_ITEM.COLUMN && (
          <Column key={activeColumn?._id} cards={activeColumn?.cards} column={activeColumn} />
        )}
        {activeCard && typeActiveDrag === ACTIVE_DRAG_ITEM.CARD && (
          <Card key={activeCard?._id} card={activeCard} />
        )}
      </DragOverlay>
    </Portal>
  )
}

export default DragOverlayPortal
