const { VITE_API_KEY_IMG_BB } = import.meta.env as { [key: string]: string }

const IMGBB = {
  IMAGE_API_KEY: VITE_API_KEY_IMG_BB
} as const

export default IMGBB
