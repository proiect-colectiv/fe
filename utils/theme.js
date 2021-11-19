import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: '#84cf56',
            dark: '#6fb346'
        },
        secondary: {
            main: '#0092ff'
        },
        success: {
            main: '#29C83F'
        },
        error: {
            main: '#FF5F57'
        },
        warning: {
            main: '#FEAE01'
        }
    },
    typography: {
        fontFamily: 'Roboto'
    },
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    color: 'black',
                },
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {

                    width: 300,
                    cursor: 'pointer',
                    margin: 40,
                    '&:hover': {
                        backgroundColor: 'rgba(239, 242, 239, 0.8)'
                    }
                }
            }
        }
    }
})

export default theme
