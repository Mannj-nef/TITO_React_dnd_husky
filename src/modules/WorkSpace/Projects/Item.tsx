import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import Action from './Action'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '~/components/Error'

interface IProject {
  _id: string
  name: string
  cover_photo: string
}

const ProjectItem = ({ project }: { project: IProject }) => {
  const navigate = useNavigate()

  return (
    <div className='h-[150px] relative cursor-pointer'>
      <img src={project.cover_photo} className='w-full h-full block object-cover rounded-xl' alt={project.name} />

      <div
        className='overlay absolute w-full h-full left-0 top-0 bg-black bg-opacity-50 rounded-lg z-10'
        onClick={() => navigate(project._id)}
      ></div>

      <div className='flex items-center justify-between absolute z-20 top-3 w-full px-3'>
        <h3 className=' text-white'>{project.name}</h3>

        <Action boardId={project._id} />
      </div>
    </div>
  )
}

export default withErrorBoundary(memo(ProjectItem), {
  FallbackComponent: ErrorComponent
})
