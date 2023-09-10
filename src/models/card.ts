import { typeCard } from '~/enums/card'
import { IUser } from './user'

interface ICardModel {
  _id: string
  title: string
  type: typeCard
  description: string
  imgUrl: string
  reply: number
  update_at: string
  avatarUrl: string
  members: IUser[]
  FE_PlaceholderCard?: boolean
}

export default ICardModel
