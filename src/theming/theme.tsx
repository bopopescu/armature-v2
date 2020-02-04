// Defines theme to use with jss and material-ui components
import { createMuiTheme } from '@material-ui/core/styles';
import { blue, pink } from './colors';

const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
const accentFontFamily = '"Bryant", "Helvetica", "Arial", sans-serif';

// Extend the Mui types for our customizations
declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    fontFamily: { default: string; accent: string };
    appBarHeight: { default: number; compact: number };
    globalMenuWidth: number;
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    fontFamily: { default: string; accent: string };
    appBarHeight: { default: number; compact: number };
    globalMenuWidth: number;
  }
}

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    globalHeader: PaletteColor;
  }
  interface PaletteOptions {
    globalHeader: PaletteColor;
  }
}

const muiTheme = createMuiTheme({
  // Typography
  fontFamily: { default: defaultFontFamily, accent: accentFontFamily },

  typography: {
    //useNextVariants: true,
    fontFamily: defaultFontFamily,
    h4: {
      // ContentTitle
      fontFamily: accentFontFamily,
      fontWeight: 100,
    },
    h5: {
      // ContentSubTitle
      fontFamily: accentFontFamily,
      fontWeight: 100,
    },
    caption: { color: 'rgba(0, 0, 0, 0.54)' },

    body2: { fontWeight: 100 },
    button: {
      fontWeight: 400,
      textTransform: 'none',
      fontSize: '1.25rem',
      fontFamily: accentFontFamily,
      letterSpacing: '1px',
    },
  },

  // Color Palette
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
    secondary: {
      light: pink[300],
      main: pink[500],
      dark: pink[700],
    },

    globalHeader: {
      light: '#333333',
      main: '#222222',
      dark: '#000000',
      contrastText: 'green',
    },
  },

  overrides: {},

  appBarHeight: {
    // offset height of top appbar
    default: 60,
    compact: 50,
  },
  globalMenuWidth: 300,
});

export default muiTheme;
