import { NavLink } from 'react-router-dom'
import NAVBAR_LINK, { DARK_MODE } from '~/mocks/navBar'
import Button from '../Button'
import NavWorkSpace from './NavWorkSpace'
import { memo } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '../Error'

const NavBar = () => {
  const handleToggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className='flex xs:w-full w-[70px] xs:h-fit gap-5 h-contentScreen rounded-2xl xs:bg-transparent bg-white xs:shadow-none shadow-boxPrimary xs:p-3 py-10 px-[14px] flex-shrink-0  flex-col xs:flex-row'>
      <>
        <NavWorkSpace />
        {NAVBAR_LINK.map((link) => (
          <NavLink
            key={link.title}
            to={link.to}
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? `navLinkClass bg-primary  group active` : `navLinkClass text-text3`
            }
          >
            <span className='group-active:text-white icon-active'>{link.icon}</span>
          </NavLink>
        ))}

        <Button className='navLinkClass' onClick={handleToggleDarkMode}>
          <span className='group-active:text-white'>{DARK_MODE.icon}</span>
        </Button>
      </>
    </div>
  )
}

export default withErrorBoundary(memo(NavBar), {
  FallbackComponent: ErrorComponent
})
