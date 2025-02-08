import { memo, useState } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '~/components/Error'
import { CheckIcon } from '~/components/Icons'
import { THEMES } from '~/mocks/setting'

const Themes = () => {
  const [theme, setTheme] = useState('light')

  return (
    <div className='flex gap-5 xs:flex-col sm:flex-col'>
      {THEMES.map((item) => (
        <div key={item.id} className='xs:flex xs:gap-4 w-[80px] md:w-[110px] lg:w-[150px] xl:w-[150px] 2xl:w-[200px] '>
          <div
            className={`shadow-boxThird flex-shrink-0 w-full rounded-lg overflow-hidden 2xl:h-[150px] cursor-pointer ${
              theme === item.title ? 'border-2 border-primary' : ''
            }`}
            onClick={() => setTheme(item.title)}
          >
            <img className='w-full h-full object-cover' src={item.imgUrl} alt={item.title} />
          </div>
          <div className='flex items-center justify-center gap-2 mt-2 '>
            <p className='font-semibold opacity-80 w-full'>{item.title}</p>
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
