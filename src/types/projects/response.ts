import ICardModel from '~/models/card'
import IColumnModel from '~/models/column'
import { IProject, IProjectDetail } from '~/models/projectWorkSpace'

export type ResponseGetProjects = { message: string; boards: IProject[] }

export type ResponseGetProjectDetail = { message: string; board: IProjectDetail }

export type ResponseCreateProject = { message: string; board: IProject }

export type ResponseCreateColumn = { message: string; column: IColumnModel }

export type ResponseCreateCard = { message: string; card: ICardModel }

export type ResponseGetCardDetail = { message: string; card: ICardModel }

export type ResponseUpdateCard = { message: string; card: ICardModel }
