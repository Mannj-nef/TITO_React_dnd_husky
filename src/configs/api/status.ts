const HTTP_STATUS = {
  // success
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,

  // error
  BAD_REQUEST: 400,
  UNAUUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  UNPROCESSABLE_ENTITY: 422,

  // Server error responses
  INTERNAL_SERVER_ERROR: 500
} as const

export default HTTP_STATUS
