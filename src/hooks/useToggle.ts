import { useState } from 'react'

const useToggle = (value?: boolean) => {
  const [show, setShow] = useState(value || false)

  const handleShow = (isShow: boolean) => {
    setShow(isShow)
  }

  return { show, handleShow }
}

export default useToggle
