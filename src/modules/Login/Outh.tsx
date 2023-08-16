import googleIcon from '~/assets/icons/Google-Icon-PNG_rwscww.png'
import appleIcon from '~/assets/icons/apple-logo-icon.png'
import { ButtonLoginOuth } from '.'

const Outh = () => {
  return (
    <div className='flex flex-col justify-between items-center gap-4'>
      <ButtonLoginOuth iconSrc={googleIcon} title='Login with Google' />
      <ButtonLoginOuth iconSrc={appleIcon} title='Login with Apple' />

      <p className='w-full text-center border leading-[0.1px]'>
        <span className='bg-white px-3'>or</span>
      </p>
    </div>
  )
}

export default Outh
