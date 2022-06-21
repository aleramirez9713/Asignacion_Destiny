import { createTheme } from "@mui/material/styles";


export const bluetheme= createTheme ( {

  logo: {
    maxWidth: 40,
    marginRight: '10px'
  },

  palette: {
    type: 'light',
    primary: {
      main: '#00aaf8',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#3bbc07',
      contrastText: '#fbf6f6',
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
    },
    info: {
      main: '#244c67',
    },
    divider: 'rgb(12,139,224)',
    success: {
      main: '#3bbc07',
    },
  },
  typography: {
    fontFamily: 'Josefin Sans',
    h1: {
      fontSize: '7.4rem',
    }
    
}
})
