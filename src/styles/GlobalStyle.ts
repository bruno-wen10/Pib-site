import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

export const GlobalStyle = createGlobalStyle<{
  theme: ThemeType;
}>`
 

@font-face {
  font-family: "Noto Sans V2";
  src: url("https://db.onlinewebfonts.com/t/2967a3c5ee426de27b245bcbc22ab82f.eot");
  src: url("https://db.onlinewebfonts.com/t/2967a3c5ee426de27b245bcbc22ab82f.eot?#iefix") format("embedded-opentype"),
       url("https://db.onlinewebfonts.com/t/2967a3c5ee426de27b245bcbc22ab82f.woff2") format("woff2"),
       url("https://db.onlinewebfonts.com/t/2967a3c5ee426de27b245bcbc22ab82f.woff") format("woff"),
       url("https://db.onlinewebfonts.com/t/2967a3c5ee426de27b245bcbc22ab82f.ttf") format("truetype"),
       url("https://db.onlinewebfonts.com/t/2967a3c5ee426de27b245bcbc22ab82f.svg#Noto Sans V2") format("svg");
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.main};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacings.small};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ul, ol {
    list-style: none;
  }

  button {
    font-family: ${({ theme }) => theme.fonts.main};
    cursor: pointer;
  }
`;

