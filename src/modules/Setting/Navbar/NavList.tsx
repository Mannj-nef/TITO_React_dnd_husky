import { memo } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import { Link } from 'react-router-dom'
import ErrorComponent from '~/components/Error'
import { SETTING_LINKS } from '~/mocks/setting'

const NavList = () => {
  return (
    <div className='py-2'>
      {SETTING_LINKS.map((item) => (
        <Link
          to={item.to}
          key={item.title}
          className='flex items-center xs:justify-center gap-3 hover:bg-slate-200 p-3 rounded-xl'
        >
          <div>{item.icon}</div>
          <span className='xs:hidden sm:hidden'>{item.title}</span>
        </Link>
      ))}
    </div>
  )
}

export default withErrorBoundary(memo(NavList), {
  FallbackComponent: ErrorComponent
})
