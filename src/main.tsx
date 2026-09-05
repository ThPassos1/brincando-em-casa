import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { SITE_PUBLIC_ACCESS } from '@/config/publicAccess'

const root = createRoot(document.getElementById('root')!)

if (!SITE_PUBLIC_ACCESS) {
  // Import estático: com SITE_PUBLIC_ACCESS = false o Rollup não empacota a landing.
  const { Offline } = await import('@/pages/Offline')
  root.render(
    <StrictMode>
      <Offline />
    </StrictMode>,
  )
} else {
  const { default: App } = await import('./App')
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
