import ICardModel from './card'

interface IColumnModel {
  _id: string
  boardId: string
  name: string
  cards: ICardModel[]
  created_at: Date
}

export default IColumnModel
