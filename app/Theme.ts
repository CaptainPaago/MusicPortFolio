import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
    white: Palette['primary'];
    black: Palette['primary'];
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
    white: PaletteOptions['primary'];
    black: PaletteOptions['primary'];
  }
}

const Theme = createTheme({
  palette: {
    neutral: { main: '#787878' },
    primary: {
      main: '#FADD69',
      //   400: '#4E8EBF',
    },
    white: { main: '#EEEEEE', 200: '#CACACA' },
    black: { main: '#000000', 800: '#2D2D2D', 700: '#393939', 600: '#4E4E4E' },
    success: { main: '#1FBD68' },
    error: { main: '#D53726' },
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
    // fontFamily: ['Sarabun', 'sans-serif'].join(','),
    fontFamily: `'Kurale', serif;, 'Roboto', sans-serif`,
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
