import { memo } from 'react'
import { EyeIcon, EysSlashIcon } from '../Icons'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '../Error'

interface IWrappIcon {
  showPassword: boolean
  setShowPassword: (isShow: boolean) => void
}

const WrappIconPassword = ({ setShowPassword, showPassword = false }: IWrappIcon) => {
  return (
    <span
      className='absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer'
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? <EysSlashIcon /> : <EyeIcon />}
    </span>
  )
}

export default withErrorBoundary(memo(WrappIconPassword), {
  FallbackComponent: ErrorComponent
})
