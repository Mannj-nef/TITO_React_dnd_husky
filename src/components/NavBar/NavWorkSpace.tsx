import { useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import { WORKSPACE } from '~/mocks/navBar'
import NavWorkSpaceItem from './NavWorkSpaceItem'
import useToggle from '~/hooks/useToggle'

const NavWorkSpace = () => {
  const { show: showWordPages, handleShow: setShowWordPages } = useToggle()

  const handleShow = () => {
    if (showWordPages) return
    setShowWordPages(true)
  }

  const handleHidden = useCallback(() => {
    if (!showWordPages) return
    setShowWordPages(false)
  }, [showWordPages])

  return (
    <div className='relative group' onMouseOver={handleShow} onMouseLeave={handleHidden}>
      <NavLink
        to={WORKSPACE.to}
        className={({ isActive }: { isActive: boolean }) =>
          isActive ? `navLinkClass bg-primary  group active` : `navLinkClass text-text3`
        }
      >
        <span className='group-active:text-white icon-active'>{WORKSPACE.icon}</span>
      </NavLink>

      {showWordPages && <NavWorkSpaceItem handleHidden={handleHidden} />}
    </div>
  )
}

export default NavWorkSpace
