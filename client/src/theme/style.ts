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
  smallFont: '13px',
  mediumFont: '16px',
  largeFont: '20px',
};

export default styled;
export {css, injectGlobal, keyframes, ThemeProvider};
