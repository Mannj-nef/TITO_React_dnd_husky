import LogoApp from '../Logo'
import Search from '../Search'
import Button from '../Button'
import { LOGO } from '~/mocks/images'
import { ICONS } from '~/mocks/header'
import { memo } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '../Error'
import useModal from '~/store/modal'
import User from './User'

const Header = () => {
  const setShowModal = useModal((state) => state.setShow)

  return (
    <div className='flex gap-8 justify-between items-center overflow-x-auto overflow-y-hidden py-2 -my-2 h-header'>
      <div className='flex gap-8'>
        <LogoApp logo={LOGO} />
        <Search className='!w-[500px] md:!w-[300px] xs:hidden'></Search>
      </div>

      <div className='flex gap-4 items-center'>
        <Button
          className='text-white mr-10 !rounded-xl !px-8 md:hidden sm:hidden xs:hidden'
          type='primary'
          onClick={() => setShowModal()}
        >
          New Project
        </Button>

        {ICONS.map((item) => (
          <span key={item.id} className='xs:hidden cursor-pointer bg-white p-2 rounded-xl shadow-boxPrimary'>
            {item.icon}
          </span>
        ))}

        <User />
      </div>
    </div>
  )
}

export default withErrorBoundary(memo(Header), {
  FallbackComponent: ErrorComponent
})
