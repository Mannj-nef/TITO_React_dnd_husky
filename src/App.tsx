import { ReactNode, Suspense } from 'react'

interface IApp {
  children: ReactNode
}

function App({ children }: IApp) {
  return <Suspense>{children}</Suspense>
}

export default App
