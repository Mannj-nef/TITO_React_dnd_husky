import DashBoardBitrhDay from './BitrhDay'
import DashBoaedMyTeam from './MyTeam'
import DashBoardTemplate from './Template'
import DashBoardInbox from './Inbox'
import DashBoardCreateWorkPage from './CreateWorkPage'
import DashBoardAutomation from './Automation'
import { memo } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '~/components/Error'

const DashBoardContent = () => {
  return (
    <div className='grid grid-cols-4 grid-rows-3 gap-5 h-full mt-5'>
      <div className='col-start-1'>
        <DashBoaedMyTeam></DashBoaedMyTeam>
      </div>

      <div className='col-start-1 row-start-2 row-end-4'>
        <DashBoardBitrhDay></DashBoardBitrhDay>
      </div>

      <div className='col-start-2 row-start-1 row-end-4'>
        <DashBoardTemplate></DashBoardTemplate>
      </div>

      <div className='col-start-3 row-start-1 row-end-3'>
        <DashBoardInbox></DashBoardInbox>
      </div>

      <div className='col-start-3 row-start-3 row-end-4'>
        <DashBoardCreateWorkPage></DashBoardCreateWorkPage>
      </div>

      <div className='col-start-4 row-start-1 row-end-4'>
        <DashBoardAutomation></DashBoardAutomation>
      </div>
    </div>
  )
}

export default withErrorBoundary(memo(DashBoardContent), {
  FallbackComponent: ErrorComponent
})
