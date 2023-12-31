const { VITE_JWT_SIGNATURE_ACCESS_TOKEN, VITE_JWT_SIGNATURE_REFRESH_TOKEN } = import.meta.env as {
  [key: string]: string
}

const TOKEN = {
  SIGNATURE_TOKEN: VITE_JWT_SIGNATURE_ACCESS_TOKEN,
  SIGNATURE_REFRESH: VITE_JWT_SIGNATURE_REFRESH_TOKEN
} as const

export default TOKEN
