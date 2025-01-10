import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '~/components/Error'
import { DashBoardContent, DashBoardTop, RecentlyProject } from '~/modules/Home/'

function Home() {
  return (
    <div className='xs:p-2 p-5 flex flex-col justify-between h-auto'>
      <DashBoardTop></DashBoardTop>

      <DashBoardContent></DashBoardContent>

      <RecentlyProject></RecentlyProject>
    </div>
  )
}

export default withErrorBoundary(Home, {
  FallbackComponent: ErrorComponent
})
