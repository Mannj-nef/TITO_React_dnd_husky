import { FormEvent, memo, useEffect, useRef } from 'react'
import { CloseIcon, DocumentPlusIcon } from '../Icons'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '../Error'
import Button from '../Button'

interface IAddCollection {
  title?: string
  show: boolean
  placeholder?: string
  setShow: (value: boolean) => void
  handleAddCollection: () => void
  setValue: (value: string) => void
}

const AddCollection = (props: IAddCollection) => {
  const { title = '', show, placeholder, setShow, handleAddCollection, setValue } = props

  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleAddCollection()
  }

  useEffect(() => {
    if (!inputRef.current) return

    inputRef.current.focus()
  }, [inputRef, show])

  return (
    <div className='w-[250px] rounded-lg flex-shrink-0 h-fit bg-white shadow-boxSecondary'>
      {!show ? (
        <div
          className='flex gap-2 p-3 text-sm items-center font-semibold rounded-xl bg-white max-w-[300px] cursor-pointer shadow-boxSecondary'
          onClick={() => setShow(true)}
        >
          <span>
            <DocumentPlusIcon />
          </span>
          <span>{title}</span>
        </div>
      ) : (
        <form className='p-4 rounded-lg shadow-boxThird' onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            className='border px-3 py-1 rounded-md w-full outline-none'
            type='text'
            placeholder={placeholder}
            onChange={(e) => setValue(e.target.value)}
          />

          <div className='mt-2 flex items-center gap-3'>
            <Button className='!py-1 !px-3 !rounded-md text-sm text-white !w-fit ' type='primary' buttonType='submit'>
              {title}
            </Button>

            <span className='p-[2px] bg-slate-400 text-white rounded-md cursor-pointer' onClick={() => setShow(false)}>
              <CloseIcon />
            </span>
          </div>
        </form>
      )}
    </div>
  )
}

export default withErrorBoundary(memo(AddCollection), {
  FallbackComponent: ErrorComponent
})
