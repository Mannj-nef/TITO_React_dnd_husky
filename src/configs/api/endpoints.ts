import { IMGBB } from '../env'

const API_ENDPOINTS = {
  // user
  ME: '/user/me',
  LOGIN: '/user/login',
  REGISTER: '/user/register',
  UPDATE_ME: '/user/update',
  LOGOUT: '/user/logout',
  SENT_EMAIL_FORGOT_PASSWORD: '/user/sent-email-password',
  FORGOT_PASSWORD: '/user/forgot-password',
  REFRESH_TOKEN: '/user/refresh-token',

  //   board
  PROJECTS: '/boards',
  PROJECTS_CREATE: '/boards/create',
  PROJECTS_DELETE: '/boards/remove',
  PROJECTS_UPDATE_COLUMN: 'boards/update-column',
  PROJECT_UPDATE: 'boards/update',

  // column
  COLUMNS_CREATE: '/columns/create',
  COLUMN_UPDATE_CARD: '/columns/update-card',
  COLUMN_DETETE: 'columns/remove',
  COLUMN_UPDATE_CARD_DIFF_COLUMN: 'columns/update-cards-diff-column',

  // card
  CARDS: '/cards',
  CARDS_CREATE: '/cards/create',
  CARDS_UPDATE: '/cards/update',
  CARDS_DETETE: '/cards/remove',

  // comment
  COMMENTS_CREATE: '/comments/create',
  COMMENTS_UPDATE: '/comments/update',
  COMMENT_DELETE: '/comments/remove',

  // image upload clound
  IMGBB_API: `https://api.imgbb.com/1/upload?key=${IMGBB.IMAGE_API_KEY}`
} as const

export default API_ENDPOINTS
