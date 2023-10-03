import Search from './Search'
import NavList from './NavList'
import { memo } from 'react'

const Navbar = () => {
  return (
    <>
      <h3>Settings</h3>
      <Search />
      <NavList />
    </>
  )
}

export default memo(Navbar)
