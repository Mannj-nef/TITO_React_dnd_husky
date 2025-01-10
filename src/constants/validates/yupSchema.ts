import * as yup from 'yup'
import { USER_MESSAGE } from '../messages'

const YUP_SCHEMA = {
  NAME: yup.string().required(USER_MESSAGE.NAME_INVALID),
  EMAIL: yup.string().required().email(USER_MESSAGE.EMAIL_INVALID),
  PASSWORD: yup
    .string()
    .required()
    .matches(/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/, USER_MESSAGE.PASSWORD_INVALID),
  PASSWORD_CONFIRMATION: yup
    .string()
    .oneOf([yup.ref('password')], USER_MESSAGE.PASSWORD_MUST_MATCH)
    .required()
} as const

export default YUP_SCHEMA
