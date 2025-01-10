import { useRef, useState, memo, useEffect, useCallback } from 'react'
import { ExtendIcon } from '~/components/Icons'
import useWorkSpace from '~/store/workSpace'
import { useMutation } from '@tanstack/react-query'
import QUERY_KEY from '~/configs/reactQuery'
import { RequestUpdateBoard } from '~/types/projects'
import { updateProjectDetail } from '~/services/projects'
import Button from '~/components/Button'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '~/components/Error'
import SetBackGround from '~/components/SetBackGround'

interface IBoardEdit {
  setShow: (isShow: boolean) => void
}

const BoardEdit = ({ setShow }: IBoardEdit) => {
  const projectDetail = useWorkSpace((state) => state.projectDetail)
  const setProjectDetail = useWorkSpace((state) => state.setProjectDetail)

  const [title, setTitle] = useState(projectDetail?.name)
  const [background, setBackground] = useState(projectDetail?.cover_photo)

  const inputTitleRef = useRef<HTMLInputElement>(null)

  const { mutate, isLoading } = useMutation({
    mutationKey: [QUERY_KEY.UPDATE_BOARD, projectDetail],
    mutationFn: (payload: RequestUpdateBoard) => updateProjectDetail(payload)
  })

  const handleChangeBackground = useCallback(
    (bgImage: string) => {
      setBackground(bgImage)
    },
    [background]
  )

  const updateBoard = () => {
    if (!projectDetail) return

    const boardUpdatePayload: RequestUpdateBoard = {
      boardId: projectDetail._id,
      cover_photo: `${background}`,
      name: `${title}`
    }

    mutate(boardUpdatePayload, {
      onSuccess: () => {
        setProjectDetail({
          ...projectDetail,
          name: `${title}`,
          cover_photo: background
        })

        setShow(false)
      }
    })
  }

  useEffect(() => {
    if (!inputTitleRef.current) return
    inputTitleRef.current.focus()
  }, [])

  return (
    <div className='mx-auto rounded-lg bg-white xs:w-full xs:h-full w-[650px] overflow-hidden'>
      {background && (
        <div className='relative'>
          <div className='h-[250px]'>
            <img className='w-full h-full object-cover ' src={background} alt='' />
          </div>

          <SetBackGround handleBG={handleChangeBackground} />
        </div>
      )}

      <div className='p-5'>
        <div className='top'>
          <div className='flex justify-between items-center'>
            <h3 className='flex items-center justify-between gap-5 text-2xl'>
              <ExtendIcon />

              <input
                ref={inputTitleRef}
                className='p-3 outline-none  rounded-lg text-text1 xs:max-w-[180px]'
                type='text'
                placeholder={title}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </h3>

            <Button className='!rounded-lg !px-3 bg-primary text-white min-w-[130px]' onClick={updateBoard}>
              {isLoading ? (
                <span className='circle-loading left-0 !translate-x-0 !translate-y-0  before:border-t-white before:border-b-white !static !w-[24px] !h-[24px]'></span>
              ) : (
                'Save change'
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withErrorBoundary(memo(BoardEdit), {
  FallbackComponent: ErrorComponent
})
