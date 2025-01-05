import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CompanyContext from './context/CompanyContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<CompanyContext>
<App />

</CompanyContext>
  </StrictMode>,
)
