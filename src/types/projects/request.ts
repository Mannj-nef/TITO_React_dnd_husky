import { typeCard } from '~/enums/card'
import { IUser } from '~/models/user'

// board
export type RespuestProjectDetail = {
  _id: string
}

export type RequestUpdateBoardOrderedColumn = {
  boardId: string
  columns: string[]
}

// column
export type ResquestCreateColumn = {
  boardId: string
  columnName: string
}

export type ResquestUpdateColumnOrderedCards = {
  columnId: string
  cards: string[]
}

export type ResquestUpdateCardOrderDiffColumn = {
  oldColumnId: string
  newColumnId: string
  cardActiveId: string
  cards: string[]
}

// card
export type ResquestCreateCard = {
  boardId: string
  columnId: string
  description: string
  title: string
  type: typeCard
}

export type ResquestUpdateCard = {
  _id: string
  title: string
  type: typeCard
  description: string
  members: IUser[]
  imgUrl: string
}
