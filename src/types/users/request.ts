export type RequestLogin = {
  email: string
  password: string
}

export type RequestRegister = {
  email: string
  password: string
  confirmPassword: string
  date: Date
}

export type RequestLogout = {
  refreshToken: string
}
