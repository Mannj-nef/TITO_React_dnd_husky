import { create } from 'zustand'
import ICardModel from '~/models/card'

interface IModal {
  isShow: boolean
  isShowMemberCardEdit: boolean
  isShowTypeCardEdit: boolean
  cardEdit: ICardModel | null
}

interface IAction {
  setCardEdit: (card: ICardModel) => void

  setShow: () => void
  setShowMemberCardEdit: () => void
  setShowTypeCardEdit: () => void

  resetModal: () => void
}

const useModal = create<IModal & IAction>((set) => ({
  isShow: false,
  isShowMemberCardEdit: false,
  isShowTypeCardEdit: false,
  cardEdit: null,

  setCardEdit: (card) => set({ cardEdit: card }),

  setShow: () => set((state) => ({ isShow: !state.isShow })),
  setShowMemberCardEdit: () =>
    set((state) => ({ isShowMemberCardEdit: !state.isShowMemberCardEdit })),
  setShowTypeCardEdit: () =>
    set((state) => ({
      isShowTypeCardEdit: !state.isShowTypeCardEdit
    })),

  resetModal: () => set({ isShow: false, cardEdit: null })
}))

export default useModal
