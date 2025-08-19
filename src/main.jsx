import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import app from '../firebaseConfig.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
