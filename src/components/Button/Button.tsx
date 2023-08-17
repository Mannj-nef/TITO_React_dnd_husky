import { HTMLAttributes, ReactNode } from 'react'

type type = 'primary' | 'secondary' | (string & {})

interface IButton extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  type?: type
  className?: string
  href?: string
}

const Button = ({ children, className = 'button-primary', type = '', href, ...props }: IButton) => {
  return (
    <button className={`btn button-${type} ${className}`} {...props}>
      {children}
    </button>
  )
}
export default Button
