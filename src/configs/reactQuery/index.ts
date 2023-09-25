const QUERY_KEY = {
  LOGIN: 'login',
  SIGN_UP: 'signup',
  GET_ME: 'get_me',
  UPDATE_ME: 'update_me',
  LOGOUT: 'logout',

  // board
  CEATE_BOARD: 'create_board',
  GET_BOARD: 'get_board',
  GET_BOARD_DETAIL: 'board_detail',
  REMOVE_BOARD: 'remove_board',
  UPDATE_BOARD: 'update_board',
  UPDATE_ORDER_COLUMN: 'update_ordered_column',

  // column
  ADD_COLUMN: 'add_column',
  REMOVE_COLUMN: 'remove_column',
  UPDATE_ORDER_CARD: 'update_ordered_card',
  UPDATE_ORDER_CARD_BETWEEN_DIFF_COLUMN: 'update_ordered_card_diff_column',

  // card
  ADD_CARD: 'addCard',
  REMOVE_CARD: 'remove_card',
  UPDATE_CARD: 'update_card',
  GET_CARD_DETAIL: 'card_detail'
} as const

export default QUERY_KEY
