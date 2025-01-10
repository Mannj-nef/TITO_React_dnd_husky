import { ReactNode, memo } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '../Error'
import { CloseIcon, DeleteIcon } from '../Icons'
import { ICONS } from '~/mocks/column'

interface IActionCollection {
  title: string
  children?: ReactNode
  closeAction: () => void
  handleRemove: () => void
}

const ActionCollection = (props: IActionCollection) => {
  const { title = '', children, handleRemove, closeAction } = props

  return (
    <div className='absolute z-20 top-full left-0 bg-white shadow-boxThird py-5 rounded w-[200px]'>
      <div
        className='absolute top-1 right-2 w-6 h-6 flex items-center p-1 rounded-full hover:bg-slate-200'
        onClick={closeAction}
      >
        <CloseIcon />
      </div>

      <div className='border-b-2 pb-2'>
        {ICONS.map((item) => (
          <p
            key={item.id}
            className='flex items-center gap-4 text-sm font-normal p-2 hover:bg-slate-200 cursor-pointer'
          >
            {item.icon}
            <span>{item.title}</span>
          </p>
        ))}
        {children}
      </div>

      <div className='mt-2 cursor-pointer'>
        <p className='flex items-center gap-4 text-sm font-normal p-2 hover:bg-slate-200' onClick={handleRemove}>
          <DeleteIcon />
          <span>{title}</span>
        </p>
      </div>
    </div>
  )
}

export default withErrorBoundary(memo(ActionCollection), {
  FallbackComponent: ErrorComponent
})
