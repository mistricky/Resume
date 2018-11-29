import * as styledComponents from 'styled-components';

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export interface IThemeInterface {
  primaryColor: string;
  shadowColor: string;
  backgroundColor: string;
  borderColor: string;
  borderRadius: string;
  color: string;
  hoverColor: string;
  mobileWidth: string;
}

export const theme = {
  primaryColor: '#fff',
  shadowColor: '#cecece',
  backgroundColor: '#eceff1',
  borderColor: '#cecece',
  borderRadius: '3px',
  color: '#000',
  hoverColor: '#dfe6e9',
  mobileWidth: '960px',
  green: '#2ecc71',
  deepGreen: '#27ae60',
  yellow: '#fad390',
  deepYellow: '#f6b93b',
  blue: '#3498db',
  deepBlue: '#2980b9',
  gradientBlueAndGreen:
    'linear-gradient(20deg, rgb(52,152,219), rgb(46,204,113))',
  gradientYellowAndGreen:
    'linear-gradient(20deg, rgb(250,211,144), rgb(46,204,113))',
  smallFont: '13px',
  mediumFont: '16px',
  largeFont: '20px',
  popBgColor: 'rgba(0, 0, 0, 0.8)',
  darkGray: '#a9a9a9',
  grayFontColor: '#999',
};

export default styled;
export {css, injectGlobal, keyframes, ThemeProvider};
