import { withErrorBoundary } from 'react-error-boundary'
import Button from '../Button'
import { SearchIcon } from '../Icons'
import { memo } from 'react'
import ErrorComponent from '../Error'

interface ISearch {
  className: string
}

const Search = ({ className }: ISearch) => {
  return (
    <div className='relative z-10'>
      <div className={`flex rounded-2xl gap-5 w-full bg-white  shadow-boxPrimary p-1 ${className}`}>
        <input
          type='text'
          className='px-5 w-full   bg-transparent text-xs lg:text-sm font-normal text-text1 outline-none flex-1'
          placeholder='Search now'
        />
        <Button className='text-white flex items-center !px-4 !rounded-2xl' type='primary'>
          <SearchIcon />
        </Button>
      </div>
    </div>
  )
}

export default withErrorBoundary(memo(Search), {
  FallbackComponent: ErrorComponent
})
