import axios from 'axios'
import { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { API_ENDPOINTS } from '~/configs/api'
import { BOARDS_MESSAGE } from '~/constants/messages'

const useUploadImage = () => {
  const [imageURL, setImageURL] = useState<string | null>(null)

  const handleUploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files

    if (!files) return

    const bodyFormData = new FormData()
    bodyFormData.append('image', files[0])

    try {
      const response = await axios.post(API_ENDPOINTS.IMGBB_API, bodyFormData)
      const imageData = response.data.data

      if (!imageData) {
        toast.error(BOARDS_MESSAGE.CAN_NOT_UPLOAD_MESSAGE)
        return
      }

      setImageURL(imageData.url)

      return imageData
    } catch (error) {
      toast.error('Error when upload image to imageBB')
    }
  }

  return { imageURL, setImageURL, handleUploadImage }
}

export default useUploadImage
