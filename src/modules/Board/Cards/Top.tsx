import { PencilIcon } from '~/components/Icons'
import { handleColorLable } from '~/utils/handleColor'

interface ICardTop {
  title: string
  label: 'default' | 'primary' | 'secondary' | 'danger' | 'warning' | 'success'
}

const CardTop = ({ title, label = 'primary' }: ICardTop) => {
  const classColor = handleColorLable(label)

  return (
    <div className='flex items-center justify-between mb-4'>
      <span
        className={`text-line-1 max-w-[180px] py-1 px-8 text-xs font-semibold border-none rounded-2xl ${classColor}`}
      >
        {title}
      </span>
      <span className='cursor-pointer hidden group-hover:block'>
        <PencilIcon />
      </span>
    </div>
  )
}

export default CardTop
