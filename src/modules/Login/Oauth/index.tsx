import { memo } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import { Link } from 'react-router-dom'
import ErrorComponent from '~/components/Error'
import { Oauth2 } from '~/mocks/Oauth'

const Oauth = () => {
  return (
    <div className='flex flex-col justify-between items-center gap-4'>
      {Oauth2.map((item) => (
        <Link key={item.id} to={item.href} className='btn bg-white text-slate-800 w-full font-medium'>
          <div className='flex items-center gap-2 justify-center w-full'>
            <div className='w-5 h-5'>
              <img src={item.icon} className='w-full h-full object-cover block' alt={item.title} />
            </div>

            {item.title}
          </div>
        </Link>
      ))}

      <p className='w-full text-center border leading-[0.1px] mb-4'>
        <span className='bg-white px-3'>or</span>
      </p>
    </div>
  )
}

export default withErrorBoundary(memo(Oauth), {
  FallbackComponent: ErrorComponent
})
