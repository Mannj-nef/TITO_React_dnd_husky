import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '../Error'

const Portal = ({ children }: { children: ReactNode }) => {
  return createPortal(children, document.body)
}

export default withErrorBoundary(Portal, {
  FallbackComponent: ErrorComponent
})
