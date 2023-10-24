import Button from '~/components/Button'
import CommentItem from './CommentItem'
import useUser from '~/store/user'
import { useState, memo } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '~/components/Error'

const Comments = () => {
  const user = useUser((state) => state.user)
  const [comment, setComment] = useState<string>('')

  return (
    <>
      <div>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 border rounded-full flex-shrink-0'>
            <img
              className='w-full h-full object-cover rounded-full shadow-boxSecondary'
              src={user?.avatar}
              alt={user?.name}
            />
          </div>

          <textarea
            className='w-full text-sm p-3 outline-none border rounded-lg resize-none mt-3'
            placeholder='write a comment'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <Button className='text-white !rounded-xl mt-2 ml-auto !py-1 !px-4' type='primary'>
          Save
        </Button>
      </div>

      {Array(3)
        .fill(null)
        .map(() => (
          <CommentItem key={Math.random()} peopleComment={null} />
        ))}
    </>
  )
}

export default withErrorBoundary(memo(Comments), {
  FallbackComponent: ErrorComponent
})
