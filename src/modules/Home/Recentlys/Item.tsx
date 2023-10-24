import { ArrowUpCircleIcon } from '~/components/Icons'

const porps = {
  imgUrl: 'https://source.unsplash.com/random',
  nameProject: 'Todo-List',
  timeEdit: 'Edited 24 min ago'
}

const RecentlyItem = ({ project = porps }) => {
  return (
    <div className='relative overflow-hidden  rounded-xl cursor-pointer'>
      <div className='h-[100px]'>
        <img
          src={project.imgUrl}
          className='w-full h-full block object-cover'
          alt={project.nameProject}
        />
      </div>
      <div className='ovelay absolute w-full h-full bg-blackToWhite top-0 left-0'></div>
      <div className='flex absolute right-5 bottom-3 z-20 cursor-pointer gap-2 items-center'>
        <div className='text-white '>
          <p className='text-white text-end'>{project.nameProject}</p>
          <p className='text-xs text-slate-500'>{project.timeEdit}</p>
        </div>
        <span className='rotate-45 text-white'>
          <ArrowUpCircleIcon />
        </span>
      </div>
    </div>
  )
}

export default RecentlyItem
