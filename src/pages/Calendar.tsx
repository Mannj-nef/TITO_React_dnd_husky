import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '~/components/Error'
import { CALENDAR } from '~/mocks/calendar'
import { PremiumCalendar, TopCalendar } from '~/modules/Calendar'

const Calendar = () => {
  return (
    <>
      <div className='p-5 h-full flex flex-col opacity-60 pointer-events-none select-none'>
        <h1 className='text-3xl'>Calendar</h1>

        <TopCalendar />

        <div className='grid grid-cols-7 flex-1 mt-5'>
          {CALENDAR.map((item) => (
            <div className='border-2 text-center p-2' key={item.day}>
              <p className='py-2 px-8 rounded-xl inline-block bg-slate-200 font-semibold'>
                {item.day}
              </p>
            </div>
          ))}
        </div>
      </div>

      <PremiumCalendar />
    </>
  )
}

export default withErrorBoundary(Calendar, {
  FallbackComponent: ErrorComponent
})
