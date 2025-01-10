import { memo } from 'react'

const DashBoardMyTeam = () => {
  return (
    <div className='flex flex-col justify-between bg-white rounded-lg h-full shadow-boxPrimary xs:p-4 p-5 cursor-pointer'>
      <div className='flex-1'>
        <h3 className='capitalize'>My Team</h3>
        <p className='text-xs text-slate-600'>+9 Member</p>
      </div>

      <div className='flex ml-auto -mr-2'>
        {Array(3)
          .fill(null)
          .map(() => (
            <div
              key={Math.random()}
              className='relative -mx-2 xs:right-4 right-5 bottom-5  w-10 h-10 top-0 p-1 bg-white shadow-boxPrimary rounded-full'
            >
              <img
                src='https://source.unsplash.com/random'
                className='block w-full h-full object-cover rounded-full cursor-pointer'
                alt=''
              />
            </div>
          ))}
      </div>
    </div>
  )
}

export default memo(DashBoardMyTeam)
