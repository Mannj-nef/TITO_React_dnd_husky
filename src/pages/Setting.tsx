import { withErrorBoundary } from 'react-error-boundary'
import Button from '~/components/Button'
import ErrorComponent from '~/components/Error'
import { DropdownSetting, FeatureSetting, NavbarSetting, ThemeSetting, ToggleSetting } from '~/modules/Setting'

const Setting = () => {
  return (
    <div className='flex md:gap-5 lg:gap-6 xl:gap-6 2xl:gap-10'>
      <div className='nav  pr-4 overflow-hidden md:w-[200px] xl:w-[250px] 2xl:w-[250px] pt-5'>
        <NavbarSetting />
      </div>

      <div className='w-full h-contentSetting overflow-y-auto'>
        <div className='xs:p-6 p-8 w-full'>
          <div className='-mx-3 border rounded-2xl mt-5 shadow-boxPrimary xs:p-3 px-5 py-3'>
            <FeatureSetting title='Interface theme' description='Select or customize your Husky-dnd theme.'>
              <ThemeSetting />
            </FeatureSetting>

            <FeatureSetting title='Transparent sidebar' description='Make the desktop sidebar transparent'>
              <ToggleSetting />
            </FeatureSetting>

            <FeatureSetting title='Sidebar feature' description='What shows in the desktop sidebar'>
              <DropdownSetting />
            </FeatureSetting>

            <FeatureSetting title='Transparent sidebar' description='Make the desktop sidebar transparent'>
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
