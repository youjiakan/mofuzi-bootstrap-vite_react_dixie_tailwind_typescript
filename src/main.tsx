import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { initializeDatabase } from './lib/database'
import './index.css'

// Initialize database with Dexie provider for local development
initializeDatabase({ type: 'dexie' })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
