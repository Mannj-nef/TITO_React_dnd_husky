import { HTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type type = 'primary' | 'secondary' | (string & {})

interface IButton extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  type?: type
  className?: string
  href?: string
}

const classCommon = 'py-2 px-12 outline-none border rounded-full block flex items-center justify-center'

const Button = ({ children, className = 'button-primary', type = '', href, ...props }: IButton) => {
  return href ? (
    <Link to={href} className={`${classCommon} button-${type} ${className}`}>
      {children}
    </Link>
  ) : (
    <button className={` ${classCommon} button-${type} ${className}`} {...props}>
      {children}
    </button>
  )
}
export default Button
