import { HTMLAttributes, ReactNode, memo } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import { useController } from 'react-hook-form'
import ErrorComponent from '../Error'

type type = 'text' | 'password' | (string & {})

interface IInput extends HTMLAttributes<HTMLInputElement> {
  type?: type
  disabled?: boolean
  name: string
  control?: any
  error?: string
  children?: ReactNode
}

const Input = ({
  type = 'text',
  error,
  name,
  control,
  disabled = false,
  children,
  ...props
}: IInput) => {
  const { field } = useController({
    name,
    control,
    defaultValue: ''
  })

  return (
    <>
      <div className='relative'>
        <input
          disabled={disabled}
          id={name}
          type={type}
          autoComplete='off'
          className={`p-4 border focus:border-primary rounded-md relative outline-none w-full disabled:bg-disabled disabled:opacity-40' ${
            !!error ? 'border-error' : ''
          } ${children ? 'pr-14' : ''} `}
          {...props}
          {...field}
        />

        {error ? (
          <span className='input-error absolute text-error left-3 top-full bg-white  pointer-events-none font-medium text-xs '>
            {error}
          </span>
        ) : null}

        {children}
      </div>
    </>
  )
}

export default withErrorBoundary(memo(Input), {
  FallbackComponent: ErrorComponent
})
