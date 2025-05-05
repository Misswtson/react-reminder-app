
 // Using of higher order component to wrap the app with theme provider

import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { blueTheme } from "./blueTheme"



export const AppTheme = ({ children }) => {
  return (
   <ThemeProvider theme={ blueTheme }>
    <CssBaseline />
    
    { children }
   </ThemeProvider>
   
  )
}

