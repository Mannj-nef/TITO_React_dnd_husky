import { memo } from 'react'
import { SettingIcon } from '~/components/Icons'
import { Skeleton } from '~/components/Loading'

const BoardLoadingSkeleton = () => {
  return (
    <div className='flex flex-col h-full'>
      <div className='top mb-5'>
        <div className='flex items-center gap-5'>
          <div className=''>
            <Skeleton height='30px' width='150px' />
          </div>
          <span className=''>
            <SettingIcon />
          </span>
        </div>
      </div>
      <div className='flex gap-4 h-full'>
        {Array(5)
          .fill(null)
          .map(() => (
            <div
              key={Math.random()}
              className='w-[250px] rounded-lg flex-shrink-0 flex flex-col pointer-events-auto bg-white mb-2 p-3'
            >
              <h3>
                <Skeleton height='20px' width='150px' />
              </h3>

              {Array(3)
                .fill(null)
                .map(() => (
                  <div key={Math.random()} className='mt-4'>
                    <Skeleton height='177px' />
                  </div>
                ))}
            </div>
          ))}
      </div>
    </div>
  )
}

export default memo(BoardLoadingSkeleton)
