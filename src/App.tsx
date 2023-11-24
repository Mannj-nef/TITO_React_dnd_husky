import { ReactNode } from 'react'

interface IApp {
  children: ReactNode
}

function App({ children }: IApp) {
  return children
}

export default App
