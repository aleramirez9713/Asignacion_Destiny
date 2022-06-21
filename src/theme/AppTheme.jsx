import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"

import { bluetheme } from "./blueTheme"

export const AppTheme = ({ children }) => {
    return (
       <ThemeProvider theme={ bluetheme } >

       <CssBaseline/>

       { children }

       </ThemeProvider>
    )
}

