import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

export const pbColors = {
  white: '#FFFFFF',
  black: '#000000',

  yellow100: '#FFF9E6',
  yellow200: '#FED861',
  yellow300: '#BF9D36',

  green100: '#E4F2EF',
  green200: '#239C82',
  green300: '#1B7864',

  red100: '#FCEFF0',
  red200: '#DF5F5F',
  red300: '#B13434',

  blue100: '#EBF7FF',
  blue200: '#D8ECF8',
  blue300: '#3FB2EE',
  blue400: '#0192D0',
  blue500: '#00679D',
  blue600: '#054D7D',

  slate100: '#414F58',
  slate200: '#2F3940',
  slate300: '#293238',

  gray100: '#F8F8F8',
  gray200: '#F1F1F1',
  gray300: '#E0E0E0',
  gray400: '#D1D1D1',
  gray500: '#989EA4',
  gray600: '#71767D',
  gray700: '#585E64',
  gray800: '#484E54',
  gray900: '#20272B'
};

//  brandAlt1: `#e28856`,
// 	brandAlt1Hover: `#f67d3a`,
// 	brandAlt2: `#7747ff`,
// 	brandAlt2Hover: `#d6c9ff`,
// 	brandAlt3: `#250450`,
// 	brandAlt3Hover: `#420e87`,
// 	brandAlt4: `#ffd8c2`,
// 	brandAlt4Hover: `#f0aa83`,
// 	brandDefault: `#848484`,
// 	brandGrey: `#d8d8d8`,
// 	brandLightGrey: `#e9e5e5`,
// 	brandLightestGrey: `#f2f2f2`,
// 	brandDarkGrey: `#231F20`,
// 	brandWhite: `#ffffff`,
// 	overlayColor: `#7747ff`,
// 	errorColor:  `#E98741`,

const fontColors = {
  dark: pbColors.gray200,
  light: pbColors.slate300
};

const secondaryFontColors = {
  dark: pbColors.gray500,
  light: pbColors.gray600
};

const backgroundColors = {
  dark: pbColors.slate300,
  light: pbColors.white
};

const secondaryBackgroundColors = {
  dark: pbColors.gray900,
  light: pbColors.gray100
};

const borderColors = {
  dark: pbColors.gray800,
  light: pbColors.gray300
};

const boxShadow = {
  light: '2px 4px 6px rgba(0, 0, 0, 0.15)',
  dark: '2px 4px 6px rgba(0, 0, 0, 0.5)'
};

const linkColors = {
  light: pbColors.blue500,
  dark: pbColors.blue300
};

const errorColors = {
  light: pbColors.red300,
  dark: pbColors.red300
};

export const createTheme = (mode) => ({
  pb__ui: {
    mode,
    baseFontFamily: '"Roboto", sans-serif',
    alternateFontFamily: '"Playfair Display", serif',
    headerFontFamily: '"Maven Pro", sans-serif',
    fontSizeBase: '15px',
    fontSizeSmall: '14px',
    fontWeightBase: '400',
    fontWeightStrong: '600',
    fontColor: fontColors[mode],
    secondaryFontColor: secondaryFontColors[mode],
    linkColor: linkColors[mode],
    backgroundColor: backgroundColors[mode],
    secondaryBackgroundColor: secondaryBackgroundColors[mode],
    borderColor: borderColors[mode],
    errorColor: errorColors[mode],
    borderRadius: '3px',
    boxShadow: boxShadow[mode],
    colors: pbColors,
    breakpoints: {
      smallUp: `only screen`,
      smallOnly: `only screen and (max-width: 39.9375em)`,
      mediumUp: `only screen and (min-width: 40em)`,
      mediumOnly: `only screen and (min-width: 40em) and (max-width: 79.9375em)`,
      largeUp: `only screen and (min-width: 80em)`,
      largeOnly: `only screen and (min-width: 80em) and (max-width: 89.9375em)`,
      xLargeUp: `only screen and (min-width: 90em)`
    }
  }
});

export const GlobalStyles = createGlobalStyle`
  ${styledNormalize}

  *,
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  html, body {
    font-size:  ${({ theme }) => theme.pb__ui.fontSizeBase};
    font-family: ${({ theme }) => theme.pb__ui.baseFontFamily};
    font-weight:  ${({ theme }) => theme.pb__ui.fontWeightBase};
    -webkit-font-smoothing: antialiased;
  }
  body {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.pb__ui.fontColor};
    background-color: ${({ theme }) => theme.pb__ui.backgroundColor}; 
  }
  a {
    color: ${({ theme }) => theme.pb__ui.linkColor};
    text-decoration: none;
  }
  img {
    display: inline-block;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
  }

`;
