import { memo } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import { Link } from 'react-router-dom'
import ROUTER from '~/configs/router'
import useWorkSpace from '~/store/workSpace'
import ErrorComponent from '../Error'

interface INavWorkSpaceItem {
  handleHiden: () => void
}

const NavWorkSpaceItem = ({ handleHiden }: INavWorkSpaceItem) => {
  const projects = useWorkSpace((state) => state.projects)

  return (
    <div className={`navLinkHover`}>
      <div className='w-[300px] px-2 -mx-2 h-[300px] overflow-y-auto overflow-hidden'>
        {!!projects.length &&
          projects.map((project) => (
            <Link
              to={`${ROUTER.WORKSPACE.path}/${project._id}`}
              key={Math.random()}
              className='flex mb-3 items-center gap-4 p-3 rounded-lg cursor-pointer shadow-boxSecondary'
              onClick={handleHiden}
            >
              <div className='w-16 h-10'>
                <img
                  src={project.cover_photo}
                  className='w-full h-full block object-cover rounded-lg'
                  alt={project.name}
                />
              </div>

              <h3 className='flex-shrink-0'>{project.name}</h3>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default withErrorBoundary(memo(NavWorkSpaceItem), {
  FallbackComponent: ErrorComponent
})
