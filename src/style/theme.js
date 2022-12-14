import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: '#95F1E3',
            dark: '#62BEB1',
            light: '#C9FFFF',
        },
        secondary: {
            main: '#FFABD1',
            dark: '#B27792',
            light: '#FFBBDA',
        },
        error: {
            main: '#FF3636',
            dark: '#D32F2F',
            light: '#E57373',
        },
        info: {
            main: '#29B6F6',
            dark: '#0288D1',
            light: '#4FC3F7',
        },
        success: {
            main: '#00FFA3',
            dark: '#00B272',
            light: '#81C784',
        },
        headerBlack: {
            main: '#171717',
        },
        dark: {
            main: '#212121',
            light: '#0000000A',
        },
        darkGray: {
            main: '#2D2D2D',
        },
        rowBlack: {
            main: '#343333',
        },
        tableBlack: {
            main: '#444444',
        },
        buttonBlack: {
            main: '#494949',
        },
        lightGray: {
            main: '#A7A6A6',
        },
        clearGray: {
            main: '#DEDEDE',
        },
        dropGray: {
            main: '#EEEEEE',
        },
        background: {
            default: '#11151C',
            paper: '#11151C',
        }
    },
    typography: {
        fontFamily: 'Ubuntu Mono',
        button: {
            fontSize: '1.15rem',
            textTransform: 'none',
            fontWeight: 600,
        },
    },
    spacing: 8,
    shape: {
        borderRadius: 4,
    },
    components: {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    padding: '10px',
                    fontSize: '0.75rem',
                },
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#444444'
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                        "-webkit-appearance": "none",
                        width: 10,
                    },
                    "&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track": {
                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                    },
                    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                        borderRadius: 8,
                        backgroundColor: "rgba(0, 0, 0, 0.25)",
                    },
                    "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
                        backgroundColor: "rgba(0, 0, 0, 0.25)",
                    },
                    "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
                        backgroundColor: "rgba(128, 135, 139, 0.8)",
                    },
                }
            }
        }
    }
});