import { memo, ReactNode } from 'react'

interface ISkeleton {
  width?: string
  height: string
  children?: ReactNode
}

const Skeleton = ({ children, height, width = '100%' }: ISkeleton) => {
  return (
    <div className='skeleton-loading' style={{ width, height }}>
      {children}
    </div>
  )
}

export default memo(Skeleton)
