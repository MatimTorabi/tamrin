import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Code from "../src/components/Code/Code"

createRoot(document.getElementById('roo')).render(
  <StrictMode>
    <Code/>
  </StrictMode>,
)
