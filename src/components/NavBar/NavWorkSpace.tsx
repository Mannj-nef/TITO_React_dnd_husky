import { useState, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import { WORKSPACE } from '~/mocks/navBar'
import NavWorkSpaceItem from './NavWorkSpaceItem'

const NavWorkSpace = () => {
  const [showWordPages, setShowWordPages] = useState(false)

  const handleShow = () => {
    if (showWordPages) return
    setShowWordPages(true)
  }

  const handleHiden = useCallback(() => {
    if (!showWordPages) return
    setShowWordPages(false)
  }, [showWordPages])

  return (
    <div className='relative group' onMouseOver={handleShow} onMouseLeave={handleHiden}>
      <NavLink
        to={WORKSPACE.to}
        className={({ isActive }: { isActive: boolean }) =>
          isActive ? `navLinkClass bg-primary  group active` : `navLinkClass text-text3`
        }
      >
        <span className='group-active:text-white icon-active'>{WORKSPACE.icon}</span>
      </NavLink>

      {showWordPages && <NavWorkSpaceItem handleHiden={handleHiden} />}
    </div>
  )
}

export default NavWorkSpace
