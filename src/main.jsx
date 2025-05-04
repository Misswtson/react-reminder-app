import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { ReminderApp } from './ReminderApp'
import { BrowserRouter } from 'react-router'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <ReminderApp />
      </BrowserRouter>

  </StrictMode>
)
