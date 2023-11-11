import { IUser } from '~/models/user'

export type ResponseGetMeUser = Omit<IUser, 'password' | 'email_verify_token' | 'forgot_password_token' | 'verify'>

export type ResponseGetMe = { message: string; user: IUser }

export type ResponseUpdateMe = { message: string; user: IUser }

export type ResponseLogin = { message: string; token: string; refreshToken: string }

export type ResponseRegister = { message: string; token: string; refreshToken: string }

export type ResponseLogout = { message: string }

export type ResponseRefreshToken = { message: string; token: string; refreshToken: string }
