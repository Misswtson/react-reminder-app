import { Route, Routes } from "react-router"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { ReminderRoutes } from "../reminder/routes/ReminderRoutes"

export const AppRouter = () => {
  return (
    <Routes>

      {/* Login and Registration */}
      <Route  path='/auth/*' element={ <AuthRoutes /> } />
      {/* ReminderApp */}
      <Route  path='/*' element={ <ReminderRoutes /> } />

    </Routes>
  )
}

