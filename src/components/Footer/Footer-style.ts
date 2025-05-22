import { theme } from "@/styles/theme";
import { styled } from "styled-components";


export const FooterContainer = styled.footer`
  background: linear-gradient(to left, #131E5B, #81C6E8); // Cor escura para o footer
  color: ${theme.colors.lightGray};
  padding: ${theme.spacings.large} ${theme.spacings.medium};
  font-family: ${theme.fonts.main};
`;

export const FooterContent = styled.div`
  max-width: ${theme.breakpoints.desktop};
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacings.large};
  text-align: left;

  @media (max-width: ${theme.breakpoints.mobile}) {
    text-align: center;
    grid-template-columns: 1fr;
  }
`;

export const FooterSection = styled.div`
  h4 {
    font-size: ${theme.fontSizes.large};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.medium};
    font-family: ${theme.fonts.heading};
    font-weight: 600;
  }

  p, a {
    font-size: ${theme.fontSizes.medium};
    color: ${theme.colors.lightGray};
    line-height: 1.7;
    margin-bottom: ${theme.spacings.xsmall};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.colors.primary};
    }
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: ${theme.spacings.xsmall};
  }
`;

export const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacings.small};
  
  svg {
    color: ${theme.colors.primary};
    margin-right: ${theme.spacings.small};
    font-size: 1.2em;
    min-width: 20px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    justify-content: center;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacings.medium};
  margin-top: ${theme.spacings.medium};

  a {
    color: ${theme.colors.lightGray};
    font-size: 1.8rem;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: ${theme.colors.primary};
      transform: scale(1.1);
    }
  }
  @media (max-width: ${theme.breakpoints.mobile}) {
    justify-content: center;
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  margin-top: ${theme.spacings.large};
  padding-top: ${theme.spacings.medium};
  border-top: 1px solid ${theme.colors.mediumGray}50; // Linha sutil
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.mediumGray};

  a {
    color: ${theme.colors.primary};
    text-decoration: underline;
    &:hover {
        color: ${theme.colors.white};
    }
  }
`;

export const LogoFooter = styled.img`
  max-height: 70px;
  margin-bottom: ${theme.spacings.medium};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
`;