import { memo, useState } from 'react'

const Toggle = () => {
  const [transparentSidebar, setTransparentSidebar] = useState(false)

  return (
    <div
      className={`w-14 h-7 rounded-full flex items-center p-1 cursor-pointer ${
        transparentSidebar ? 'bg-text1' : 'bg-primary'
      }`}
      onClick={() => setTransparentSidebar(!transparentSidebar)}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full relative ease-in ${
          transparentSidebar ? 'ml-auto' : ''
        }`}
      ></div>
    </div>
  )
}

export default memo(Toggle)
