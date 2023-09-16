import http from '~/apis/public'
import { API_ENDPOINTS } from '~/configs/api'
import {
  ResponseCreateCard,
  ResponseGetCardDetail,
  ResponseUpdateCard,
  ResquestCreateCard,
  ResquestUpdateCard
} from '~/types/projects'

export const addCard = async (payload: ResquestCreateCard) => {
  const { data } = await http.post<ResponseCreateCard>(API_ENDPOINTS.CARDS_CREATE, payload)

  return data
}

export const getCardDetail = async (cardId: string) => {
  const { data } = await http.get<ResponseGetCardDetail>(`${API_ENDPOINTS.CARDS}/${cardId}`)

  return data
}

export const deleteCard = async (cardId: string) => {
  await http.delete(`${API_ENDPOINTS.CARDS_DETETE}/${cardId}`)
}

export const updateCard = async (payload: ResquestUpdateCard) => {
  const { data } = await http.patch<ResponseUpdateCard>(API_ENDPOINTS.CARDS_UPDATE, payload)

  return data
}
