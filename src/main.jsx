import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { ReminderApp } from './ReminderApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReminderApp />
  </StrictMode>,
)
