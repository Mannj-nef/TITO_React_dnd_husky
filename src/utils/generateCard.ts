import ICardModel from '~/models/card'
import IColumnModel from '~/models/column'
import { handleGetDate } from './getDate'
import { typeCard } from '~/enums/card'

const generatePlaceholderCard = (column: IColumnModel): ICardModel => {
  return {
    _id: `${column._id}-placeholder-card`,
    title: '',
    members: [],
    type: typeCard.default,
    description: '',
    imgUrl: '',
    reply: 0,
    update_at: handleGetDate(),
    avatarUrl: '',
    FE_PlaceholderCard: true
  }
}

export default generatePlaceholderCard
