import { create } from 'zustand'
import { IUser } from '~/models/user'

interface IUserState {
  user: IUser | null
  email: string
}

interface IAction {
  setUser: (user: IUser) => void
  setEmail: (email: string) => void
}

const useUser = create<IUserState & IAction>((set) => ({
  user: null,
  email: '',

  setUser: (user) => set({ user }),
  setEmail: (email) => set({ email })
}))

export default useUser
