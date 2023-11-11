import ICardModel from '~/models/card'
import { CSSProperties, memo } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { ACTIVE_DRAG_ITEM } from '~/enums/board'
import useModal from '~/store/modal'
import useUser from '~/store/user'
import { handleGetDate } from '~/utils/getDate'
import CardTop from './Top'
import CardContent from './Content'
import CardBottom from './Bottom'

interface ICard {
  card: ICardModel
}

const Card = ({ card }: ICard) => {
  const setCardEdit = useModal((state) => state.setCardEdit)
  const setShowModal = useModal((state) => state.setShow)
  const user = useUser((state) => state.user)

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: card._id,
    data: {
      type: ACTIVE_DRAG_ITEM.CARD,
      card
    }
  })

  const dndKitColumnStyle: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition: transition,
    opacity: isDragging ? '0.5' : '1',
    border: isDragging ? '1px solid #2980b9' : ''
  }

  const handleShowModalEditCard = () => {
    setCardEdit(card)
    setShowModal()
  }

  return (
    <div
      ref={setNodeRef}
      style={dndKitColumnStyle}
      {...attributes}
      {...listeners}
      className={`bg-white rounded-lg first:mt-0 p-4 shadow-boxSecondary cursor-grab group ${
        card.FE_PlaceholderCard ? 'hidden' : 'block'
      }`}
      onClick={handleShowModalEditCard}
    >
      <CardTop label={card.type} title={card.title} />

      <CardContent card={card} />

      <CardBottom avatarUrl={`${user?.avatar}`} date={handleGetDate(card.update_at)} reply={card.reply} />
    </div>
  )
}

export default memo(Card)
