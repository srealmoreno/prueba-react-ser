import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { MantineApp } from './Mantine'

const rootElement = document.getElementById('root')

if (rootElement == null) {
  throw new Error('Root element not found')
}

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <MantineApp />
  </StrictMode>
)
