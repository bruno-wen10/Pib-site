export const theme = {
  colors: {
    primary: "#131E5B", // Azul Principal
    secondary: "#47B5E4", // Azul Secundário
    tertiary: "#81C6E8", // Azul Terciário
    lightBlueGray: "#B2C9E4", // Azul Acinzentado
    darkGray: "#292B2C", // Cinza Escuro
    mediumGray: "#3A3437", // Cinza Médio
    lightGray: "#CEDAEC", // Cinza Claro
    black: "#000000",
    white: "#FFFFFF",
    accent: "#008080", // Detalhe Verde-azulado (pode ser ajustado)
    text: "#292B2C", // Cor de texto padrão
    textLight: "#FFFFFF",
    background: "#FFFFFF",
  },
  fonts: {
    primary: "Noto Sans V2" ,
    main: "'Open Sans', sans-serif",
    heading: "'arial', sans-serif",
    
    
   

  },
  fontSizes: {
    small: "0.8rem",
    medium: "1rem",
    large: "1.2rem",
    xlarge: "1.5rem",
    xxlarge: "2rem",
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  spacings: {
    xsmall: "0.5rem",
    small: "1rem",
    medium: "1.5rem",
    large: "2rem",
    xlarge: "3rem",
  },
  breakpoints: {
    mobile: "768px",
    tablet: "1024px",
    desktop: "1440px",
  },
};

export type ThemeType = typeof theme;

