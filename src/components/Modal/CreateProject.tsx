import useModal from '~/store/modal'
import { CloseIcon, ImportantIcon } from '../Icons'
import { ImageUpload } from '../Inputs'
import { memo, useState } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '../Error'
import Button from '../Button'
import { useMutation } from '@tanstack/react-query'
import { createProject } from '~/services/projects'
import useWorkSpace from '~/store/workSpace'
import { ResponseCreateProject } from '~/types/projects'
import QUERY_KEY from '~/configs/reactQuery'

const CreateProject = () => {
  const [projectName, setProjectName] = useState<string>('')
  const [backGroundUploadUrl, setBackGroundUploadUrl] = useState<string | null>(null)
  const setProjects = useWorkSpace((state) => state.setProjects)
  const projects = useWorkSpace((state) => state.projects)

  const setShow = useModal((state) => state.setShow)

  const { mutate } = useMutation({
    mutationKey: [QUERY_KEY.CEATE_BOARD],
    mutationFn: (payload: { projectName: string; backGroundUploadUrl: string | null }) => createProject(payload)
  })

  const handleCreateProject = () => {
    mutate(
      { backGroundUploadUrl, projectName },
      {
        onSuccess: (data: ResponseCreateProject) => {
          setProjects([...projects, data.board])
          setShow()
        }
      }
    )
  }

  return (
    <div className='relative max-w-[500px] w-full bg-white mx-auto top-1/2 -translate-y-1/2 rounded-xl p-5'>
      <span
        className='cursor-pointer absolute top-2 right-2  w-9 h-9  rounded-full flex items-center justify-center hover:bg-slate-300 transition-opacity'
        onClick={() => setShow()}
      >
        <CloseIcon />
      </span>

      <h3 className='text-center'>Create Project</h3>

      <div className='mt-5'>
        <label className='text-sm' htmlFor='projectName'>
          Project name <span className='text-red-600'>*</span>
        </label>
        <input
          id='projectName'
          className='p-4 border focus:border-primary rounded-md relative outline-none w-full disabled:bg-disabled disabled:opacity-40'
          type='text'
          placeholder='Project name'
          autoComplete='off'
          onChange={(e) => setProjectName(e.target.value)}
        />
        <p className='mt-1 text-xs flex items-center gap-1'>
          <ImportantIcon />
          <span>Table name is required</span>
        </p>
      </div>

      <div className='mt-5'>
        <p className='text-sm mb-1'>Background</p>
        <ImageUpload setBackGroundUploadUrl={setBackGroundUploadUrl} />
      </div>

      <Button
        className='mt-5 text-white !rounded-xl mx-auto border-none'
        type='primary'
        disabled={!projectName.length}
        onClick={handleCreateProject}
      >
        submit
      </Button>
    </div>
  )
}

export default withErrorBoundary(memo(CreateProject), {
  FallbackComponent: ErrorComponent
})
