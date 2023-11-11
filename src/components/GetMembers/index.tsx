import { memo, useEffect, useState, MouseEvent } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '~/components/Error'
import useUser from '~/store/user'

interface IGetMember {
  handleMember: (e: MouseEvent<HTMLDivElement>) => void
}

const GetMembers = ({ handleMember }: IGetMember) => {
  const user = useUser((state) => state.user)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // fake loading getUser
    const time = setTimeout(() => {
      setLoading(false)
    }, 500)

    return () => clearTimeout(time)
  }, [])

  return (
    <>
      {loading ? (
        <div className='circle-loading'></div>
      ) : (
        Array(5)
          .fill(null)
          .map(() => (
            <div
              key={Math.random()}
              className='flex items-center gap-5 p-3 hover:bg-slate-200 cursor-pointer'
              onClick={(e) => handleMember(e)}
            >
              <div className='w-[30px] h-[30px]'>
                <img className='w-full h-full object-cover rounded-full' src={user?.avatar} alt={user?.name} />
              </div>
              <p className='text-base font-medium'>{user?.name}</p>
            </div>
          ))
      )}
    </>
  )
}

export default withErrorBoundary(memo(GetMembers), {
  FallbackComponent: ErrorComponent
})
