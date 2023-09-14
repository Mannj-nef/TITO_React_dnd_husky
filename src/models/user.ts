export enum UserVerifyStatus {
  Unverified = 'Unverified',
  Verified = 'Verified',
  Banned = 'Banned'
}
export interface IUser {
  _id?: string
  name: string
  email: string
  date_of_birth: Date
  avatar: string
}
