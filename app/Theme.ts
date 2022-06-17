import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }
}

const Theme = createTheme({
  palette: {
    neutral: { main: '#787878' },
    primary: {
      main: '#0867B0',
      400: '#4E8EBF',
    },
    success: { main: '#1FBD68' },
    error: { main: '#D53726' },
    secondary: { main: '#F3FDFA' },
    warning: { main: '#FDE151' },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: ['Sarabun', 'sans-serif'].join(','),
    button: {
      textTransform: 'none',
    },
    body1: {
      fontSize: 16,
    },
    h6: {
      fontSize: 18,
      fontWeight: 400,
    },
    h5: {
      fontSize: 20,
      fontWeight: 400,
    },
    h4: {
      fontSize: 25,
      fontWeight: 400,
    },
    h3: {
      fontSize: 31.3,
      fontWeight: 400,
    },
    h2: {
      fontSize: 39.1,
      fontWeight: 500,
    },
    h1: {
      fontSize: 48.8,
      fontWeight: 600,
    },
  },
});

export default Theme;
