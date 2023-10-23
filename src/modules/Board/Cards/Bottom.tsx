import { ChatIcon, FlagIcon } from '~/components/Icons'

interface ICardBottom {
  date: string
  reply: number
  avatarUrl: string
}

const CardBottom = ({ avatarUrl, date, reply }: ICardBottom) => {
  return (
    <div className='flex items-center mt-2 justify-between'>
      <div className='flex text-xs font-semibold gap-1'>
        <span>
          <FlagIcon />
        </span>
        <p>{date}</p>
      </div>

      <div className='flex text-xs font-semibold gap-1'>
        <span>
          <ChatIcon />
        </span>
        <p>{reply}</p>
      </div>

      <div className='w-6 h-6  left-0 top-0'>
        <img
          src={avatarUrl}
          className='block w-full h-full object-cover rounded-full cursor-pointer'
          alt=''
        />
      </div>
    </div>
  )
}

export default CardBottom
