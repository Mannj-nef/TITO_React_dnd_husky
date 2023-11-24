export type RequestLogin = {
  email: string
  password: string
}

export type RequestRegister = {
  email: string
  password: string
  confirmPassword: string
  date_of_birth: Date
}

export type RequestLogout = {
  refreshToken: string
}

export type RequestUpdateMe = {
  email: string
  name: string
  date_of_birth?: Date
  password?: string
  avatar?: string
  background?: string
}
