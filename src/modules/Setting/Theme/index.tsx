import { memo, useState } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '~/components/Error'
import { CheckIcon } from '~/components/Icons'
import { THEMES } from '~/mocks/setting'

const Themes = () => {
  const [theme, setTheme] = useState('light')

  return (
    <div className='flex gap-5'>
      {THEMES.map((item) => (
        <div key={item.id}>
          <div
            className={`shadow-boxThird rounded-lg overflow-hidden w-[200px] h-[150px] cursor-pointer ${
              theme === item.title ? 'border-2 border-primary' : ''
            }`}
            onClick={() => setTheme(item.title)}
          >
            <img className=' w-full h-full ' src={item.imgUrl} alt={item.title} />
          </div>
          <div className='flex items-center justify-center gap-2 mt-2 '>
            <p className='font-semibold opacity-80'>{item.title}</p>
            {theme === item.title && (
              <div className='w-3 h-3 p-[1px] text-white bg-primary rounded-full flex items-center justify-center'>
                <CheckIcon />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default withErrorBoundary(memo(Themes), {
  FallbackComponent: ErrorComponent
})
