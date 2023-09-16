import IColumnModel from './column'
import { IUser } from './user'
export interface IProject {
  _id: string
  name: string
  cover_photo: string
  columns: string[]
  members: IUser[]
  admins: string[]
}

export interface IProjectDetail {
  _id: string
  name: string
  avatar?: string
  cover_photo?: string
  members: IUser[]
  columns: IColumnModel[]
  admins: IUser[]
}
