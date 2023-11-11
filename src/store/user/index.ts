import { create } from 'zustand'
import { IUser } from '~/models/user'

interface IUserState {
  user: IUser | null
  email: string
  password: string
}

interface IAction {
  setUser: (user: IUser) => void
  setEmail: (email: string) => void
  setPassword: (password: string) => void
}

const useUser = create<IUserState & IAction>((set) => ({
  user: null,
  email: '',
  password: '',

  setUser: (user) => set({ user }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password })
}))

export default useUser
