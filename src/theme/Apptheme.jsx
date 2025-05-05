
 // Using of higher order component to wrap the app with theme provider


export const Apptheme = ({ children }) => {
  return (
   <ThemeProvider theme={theme}>
    <CssBaseline />
    
    { children }
   </ThemeProvider>
   
  )
}

