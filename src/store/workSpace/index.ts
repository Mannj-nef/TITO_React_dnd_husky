import { create } from 'zustand'
import { uniqBy } from 'lodash'
import IColumnModel from '~/models/column'
import { IProject, IProjectDetail } from '~/models/projectWorkSpace'
import generatePlaceholderCard from '~/utils/generateCard'

interface IWorkSpaceState {
  projects: IProject[]
  projectDetail: IProjectDetail | undefined
  isLoading: boolean
}

interface IAction {
  setProjects: (projects: IProject[]) => void
  setProjectDetail: (projectDetail: IProjectDetail) => void
}

const useWorkSpace = create<IWorkSpaceState & IAction>((set) => ({
  isLoading: false,
  projects: [],
  projectDetail: undefined,

  setProjects: (projects) => set({ projects }),
  setProjectDetail: (projectDetail) =>
    set(() => {
      const newCoulmns: IColumnModel[] = projectDetail.columns.map((column) => {
        const newCard = uniqBy(
          [...column.cards, generatePlaceholderCard(column)],
          (card) => card._id
        )

        const newColumn = {
          ...column,
          cards: newCard
        }

        return newColumn
      })

      return {
        projectDetail: {
          ...projectDetail,
          columns: newCoulmns
        }
      }
    })
}))

export default useWorkSpace
