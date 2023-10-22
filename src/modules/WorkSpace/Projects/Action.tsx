import { useMutation } from '@tanstack/react-query'
import { memo, useState } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '~/components/Error'
import { ArrowLeftIcon, CloseIcon, DeleteIcon, DotsEllipsisIcon } from '~/components/Icons'
import QUERY_KEY from '~/configs/reactQuery'
import useToggle from '~/hooks/useToggle'
import { removeProject } from '~/services/projects'
import useWorkSpace from '~/store/workSpace'

const Action = ({ boardId }: { boardId: string }) => {
  const { show: showAction, handleShow: setShowAction } = useToggle()

  const setProjects = useWorkSpace((state) => state.setProjects)
  const projects = useWorkSpace((state) => state.projects)

  const [isRemoveProject, setIsRRemoveProject] = useState(false)
  const { mutate } = useMutation({
    mutationKey: [QUERY_KEY.REMOVE_BOARD, boardId],
    mutationFn: (boardId: string) => removeProject(boardId)
  })

  const onDeleteProject = () => {
    mutate(boardId, {
      onSuccess: () => {
        const newProject = projects.filter((board) => board._id !== boardId)
        setProjects(newProject)
      }
    })
  }

  return (
    <div className='relative cursor-pointer'>
      <span
        className='text-white'
        onClick={() => {
          setShowAction(!showAction)
          setIsRRemoveProject(false)
        }}
      >
        <DotsEllipsisIcon />
      </span>

      {showAction && (
        <div className=' absolute p-2 w-[200px] bg-white rounded-lg top-full right-0 shadow-boxSecondary'>
          <div
            className=' text-slate-500 w-fit ml-auto rounded-full hover:bg-slate-500 hover:text-white'
            onClick={() => {
              setShowAction(false)
              setIsRRemoveProject(false)
            }}
          >
            <CloseIcon />
          </div>
          {!isRemoveProject ? (
            <p
              className='py-1 px-2 font-medium hover:bg-slate-300 rounded-md'
              onClick={() => setIsRRemoveProject(true)}
            >
              Delete
            </p>
          ) : (
            <div className='flex items-center justify-center gap-5'>
              <div className='bg-white shadow-boxSecondary p-2 rounded-md' onClick={() => setIsRRemoveProject(false)}>
                <ArrowLeftIcon />
              </div>
              <div className='bg-white shadow-boxSecondary p-2 rounded-md text-danger' onClick={onDeleteProject}>
                <DeleteIcon />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default withErrorBoundary(memo(Action), {
  FallbackComponent: ErrorComponent
})
