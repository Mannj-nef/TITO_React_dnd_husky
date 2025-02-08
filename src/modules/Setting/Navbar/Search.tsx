import { FormEvent, memo, useState } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '~/components/Error'
import { SearchIcon } from '~/components/Icons'

const Search = () => {
  const [searchValue, setSearchValue] = useState('')

  const submitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form className='relative mt-3 xs:hidden sm:hidden' onSubmit={submitSearch}>
      <div className='absolute top-1/2 -translate-y-1/2 left-1 flex w-7 h-7 p-1 items-center '>
        <SearchIcon />
      </div>
      <input
        className='border-2 rounded-lg outline-none p-2 pl-9 w-full'
        type='text'
        value={searchValue}
        placeholder='Search'
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </form>
  )
}

export default withErrorBoundary(memo(Search), {
  FallbackComponent: ErrorComponent
})
