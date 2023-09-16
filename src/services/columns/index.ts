import http from '~/apis/public'
import { API_ENDPOINTS } from '~/configs/api'
import {
  ResponseCreateColumn,
  ResquestCreateColumn,
  ResquestUpdateCardOrderDiffColumn,
  ResquestUpdateColumnOrderedCards
} from '~/types/projects'

export const addColumn = async (payload: ResquestCreateColumn) => {
  const { data } = await http.post<ResponseCreateColumn>(API_ENDPOINTS.COLUMNS_CREATE, payload)

  return data
}

export const updateColumn = async (payload: ResquestUpdateColumnOrderedCards) => {
  await http.patch(API_ENDPOINTS.COLUMN_UPDATE_CARD, payload)
}

export const updateCardOrderDiffColumn = async (payload: ResquestUpdateCardOrderDiffColumn) => {
  await http.patch(API_ENDPOINTS.COLUMN_UPDATE_CARD_DIFF_COLUMN, payload)
}

export const removeColumn = async (columnId: string) => {
  await http.delete(`${API_ENDPOINTS.COLUMN_DETETE}/${columnId}`)
}
