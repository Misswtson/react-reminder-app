import { Route, Routes } from "react-router"
import { ReminderPage } from "../pages/ReminderPage"
import { Navigate } from "react-router"


export const ReminderRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<ReminderPage/>} />
        <Route path='/*' element={<Navigate to='/'/>} />
    </Routes>
  )
}

