import http from '~/apis/public'
import { API_ENDPOINTS } from '~/configs/api'
import {
  RequestUpdateBoard,
  RequestUpdateBoardOrderedColumn,
  ResponseGetProjectDetail,
  ResponseGetProjects
} from '~/types/projects'

export const getProjects = async () => {
  const { data } = await http.get<ResponseGetProjects>(API_ENDPOINTS.PROJECTS)

  return data
}

export const getProjectDetail = async (projectId: string) => {
  const { data } = await http.get<ResponseGetProjectDetail>(`${API_ENDPOINTS.PROJECTS}/${projectId}`)

  return data
}

export const createProject = async (payload: { projectName: string; backGroundUploadUrl: string | null }) => {
  const project = {
    name: payload.projectName,
    backGroundProjectUrl: payload.backGroundUploadUrl
  }

  const { data } = await http.post(API_ENDPOINTS.PROJECTS_CREATE, project)

  return data
}

export const removeProject = async (boardId: string) => {
  const { data } = await http.delete(`${API_ENDPOINTS.PROJECTS_DELETE}/${boardId}`)

  return data
}

export const updateProjectDetail = async (poayload: RequestUpdateBoard) => {
  await http.patch(API_ENDPOINTS.PROJECT_UPDATE, poayload)
}

export const updateOrderdColumn = async (payload: RequestUpdateBoardOrderedColumn) => {
  await http.patch(API_ENDPOINTS.PROJECTS_UPDATE_COLUMN, payload)
}
