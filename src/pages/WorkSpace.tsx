import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '~/components/Error'
import { ProjectCreate, ProjectItem } from '~/modules/WorkSpace/'
import useWorkSpace from '~/store/workSpace'

const WorkSpace = () => {
  const projects = useWorkSpace((state) => state.projects)

  return (
    <>
      <h1 className='text-center mb-5 text-xl'>WorkSpaces</h1>

      <div className='grid grid-cols-4 gap-5'>
        <ProjectCreate></ProjectCreate>

        {!!projects.length &&
          projects.map((project) => (
            <ProjectItem project={project} key={project._id}></ProjectItem>
          ))}
      </div>
    </>
  )
}

export default withErrorBoundary(WorkSpace, {
  FallbackComponent: ErrorComponent
})
