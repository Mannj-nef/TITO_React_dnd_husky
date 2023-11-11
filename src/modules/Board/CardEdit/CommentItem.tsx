import useUser from '~/store/user'

interface ICommentItem {
  peopleName: string
  peopleAvatar: string
  peopleReply: string
}

const CommentItem = ({ peopleComment }: { peopleComment: ICommentItem | null }) => {
  const user = useUser((state) => state.user)

  return (
    <div className='flex gap-3 mt-3'>
      <div className='w-10 h-10 border rounded-full flex-shrink-0'>
        <img
          className='w-full h-full object-cover rounded-full shadow-boxSecondary'
          src={peopleComment?.peopleAvatar || user?.avatar}
          alt=''
        />
      </div>
      <div>
        <div className='flex items-center gap-2'>
          <span className='font-semibold'>{peopleComment?.peopleName || user?.name}</span>
          <div className='w-1 h-1 bg-black bg-opacity-30 rounded-full'></div>
          <span className='text-xs'>1 hours ago</span>
        </div>
        <p className='w-full p-2 text-sm  border rounded-lg resize-none'>
          {peopleComment?.peopleReply ||
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis expedita, esse culpa repellendus illum consequatur fuga.'}
        </p>
      </div>
    </div>
  )
}

export default CommentItem
