import { HTMLAttributes, ReactNode, memo } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '../Error'

type type = 'primary' | 'secondary' | (string & {})

interface IButton extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  type?: type
  buttonType?: 'submit' | 'button'
  className?: string
  disabled?: boolean
}

const Button = ({
  children,
  buttonType = 'button',
  className = 'button-primary',
  type = '',
  disabled,
  ...props
}: IButton) => {
  return (
    <button
      disabled={disabled}
      type={buttonType}
      className={` btn button-${type} ${className} disabled:bg-disabled`}
      {...props}
    >
      {children}
    </button>
  )
}
export default withErrorBoundary(memo(Button), {
  FallbackComponent: ErrorComponent
})
