import { useState } from 'react'

const useToggle = () => {
  const [show, setShow] = useState<boolean>(false)

  const handleShow = (isShow: boolean) => {
    setShow(isShow)
  }

  return { show, handleShow }
}

export default useToggle
