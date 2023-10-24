import { withErrorBoundary } from 'react-error-boundary'
import Button from '~/components/Button'
import ErrorComponent from '~/components/Error'
import { ArrowExtenIcon } from '~/components/Icons'
import {
  DropdownSetting,
  FeatureSetting,
  NavbarSetting,
  ThemeSetting,
  ToggleSetting
} from '~/modules/Setting'

const Setting = () => {
  return (
    <div className='flex gap-10'>
      <div className='nav w-[250px] pt-5'>
        <NavbarSetting />
      </div>

      <div className='w-full h-contentSetting overflow-y-auto '>
        <div className='border-2 rounded-tl-3xl border-b-0 p-8 w-full'>
          <h1 className='text-3xl font-semibold flex items-center gap-2'>
            <span>
              <ArrowExtenIcon />
            </span>
            <span>Settings</span>
          </h1>

          <div className='-mx-3 border rounded-2xl mt-5 shadow-boxPrimary px-5 py-3'>
            <FeatureSetting
              title='Interface theme'
              description='Select or customize your Husky-dnd theme.'
            >
              <ThemeSetting />
            </FeatureSetting>

            <FeatureSetting
              title='Transparent sidebar'
              description='Make the desktop sidebar transparent'
            >
              <ToggleSetting />
            </FeatureSetting>

            <FeatureSetting title='Sidebar feature' description='What shows in the desktop sidebar'>
              <DropdownSetting />
            </FeatureSetting>

            <FeatureSetting
              title='Transparent sidebar'
              description='Make the desktop sidebar transparent'
            >
              <ToggleSetting />
            </FeatureSetting>

            <FeatureSetting title='Sidebar feature' description='What shows in the desktop sidebar'>
              <DropdownSetting />
            </FeatureSetting>

            <div className='footer mt-5 flex gap-3 justify-end'>
              <Button className='!rounded-lg !px-4'>Cancel</Button>
              <Button className='text-white !px-4 bg-primary !rounded-lg'>Save changes</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withErrorBoundary(Setting, {
  FallbackComponent: ErrorComponent
})
