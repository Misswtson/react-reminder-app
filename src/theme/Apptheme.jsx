
 // Using of higher order component to wrap the app with theme provider

import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material/CssBaseline"
import { blueTheme } from "./"


export const Apptheme = ({ children }) => {
  return (
   <ThemeProvider theme={ blueTheme}>
    <CssBaseline />
    
    { children }
   </ThemeProvider>
   
  )
}

