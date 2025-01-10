import DashBoardBirthDay from './BirthDay'
import DashBoardMyTeam from './MyTeam'
import DashBoardTemplate from './Template'
import DashBoardInbox from './Inbox'
import DashBoardCreateWorkPage from './CreateWorkPage'
import DashBoardAutomation from './Automation'
import { memo } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '~/components/Error'

const DashBoardContent = () => {
  return (
    <div className='flex flex-col xl:flex-row 2xl:flex-row h-auto gap-5 mt-5'>
      <div className='flex-1 grid grid-cols-2 grid-rows-2 gap-5 max-h-[340px]'>
        <div className='col-start-1'>
          <DashBoardMyTeam />
        </div>

        <div className='col-start-1 row-start-2 row-end-4 xs:col-start-2 xs:row-start-1 xs:row-end-2'>
          <DashBoardBirthDay />
        </div>

        <div className='col-start-2 row-start-1 row-end-4 xs:col-start-1 xs:row-start-2 xs:col-end-3 xs:row-end-2'>
          <DashBoardTemplate />
        </div>
      </div>

      <div className='flex-1 grid grid-cols-2 grid-rows-2 gap-5 max-h-[340px]'>
        <div className='col-start-1'>
          <DashBoardInbox />
        </div>

        <div className='col-start-1 row-start-2 row-end-4 xs:col-start-2 xs:row-start-1 xs:row-end-2'>
          <DashBoardCreateWorkPage />
        </div>

        <div className='col-start-2 row-start-1 row-end-4 xs:col-start-1 xs:row-start-2 xs:col-end-3 xs:row-end-2'>
          <DashBoardAutomation />
        </div>
      </div>
    </div>
  )
}

export default withErrorBoundary(memo(DashBoardContent), {
  FallbackComponent: ErrorComponent
})
