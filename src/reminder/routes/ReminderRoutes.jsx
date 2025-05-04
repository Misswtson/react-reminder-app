import { Route, Routes } from "react-router"
import { NotePage } from "../pages/NotePage"
import { Navigate } from "react-router"


export const ReminderRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<NotePage/>} />
        <Route path='/*' element={<Navigate to='/'/>} />
    </Routes>
  )
}

