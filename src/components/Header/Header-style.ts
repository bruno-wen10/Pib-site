import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Link, NavLink } from 'react-router-dom';


export const HeaderContainer = styled.header`
  background: linear-gradient(to bottom, #81C6E8, #131E5B);
  padding: 0 ${theme.spacings.medium};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 90px;
  display: flex;
  align-items: center;
  
`;

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;  
  max-width: ${theme.breakpoints.desktop};
  margin: 0 auto;
`;

export const LogoLink = styled(Link)`
  img {
    height: 60px; // Ajustar conforme o logo
    width: auto;
    transition: transform 0.3s ease;
  }
  &:hover img {
    transform: scale(1.05);
  }
`;

export const NavLinksContainer = styled.li<{$isOpen: boolean}>`
  display: flex;
  align-items: center;
  gap: ${theme.spacings.small};
  font-family: ${theme.fonts.primary};
  font-size: ${theme.fontSizes.medium};


  

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    position: absolute;
    top: 80px; // Abaixo do header
    left: 0;
    width: 100%;
    background-color: ${theme.colors.white};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: ${theme.spacings.medium} 0;
    max-height: ${props => (props.$isOpen ? "calc(100vh - 80px)" : "0")};
    overflow-y: auto;
    transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
    opacity: ${props => (props.$isOpen ? 1 : 0)};
    visibility: ${props => (props.$isOpen ? "visible" : "hidden")};
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: ${theme.colors.lightGray};
  text-decoration: none;
  font-weight: ${theme.fontWeights.bold};
  padding: ${theme.spacings.xsmall} ${theme.spacings.xsmall};  
  transition: color 0.3s ease, background-color 0.3s ease;
    border-radius: 4px;

  &:hover,
  &.active {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.primary}40;
    
    
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 100%;
    text-align: center;
    padding: ${theme.spacings.medium} 0;
    border-bottom: 1px solid ${theme.colors.lightGray};
    &:last-child {
        border-bottom: none;
    }
  }
`;

export const AuthSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacings.small};
  margin-left: ${theme.spacings.medium}; // Espaço entre nav links e auth

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    width: 100%;
    margin-left: 0;
    padding-top: ${theme.spacings.small}; // Espaço acima no menu mobile
  }
`;

export const AuthLink = styled(StyledNavLink)`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: 1px solid ${theme.colors.primary};

  &:hover,
  &.active {
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
  }
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  padding: ${theme.spacings.xsmall} ${theme.spacings.small};
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${theme.spacings.xsmall};
  transition: background-color 0.3s ease, color 0.3s ease;
  font-size: ${theme.fontSizes.medium};

  &:hover {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: calc(100% - ${theme.spacings.large}); // Ajustar para padding do container
    margin: ${theme.spacings.small} auto;
    justify-content: center;
  }
`;

export const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.8rem;
  color: ${theme.colors.primary};

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: block;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacings.xsmall};
  color: ${theme.colors.text};
  font-weight: 500;

  svg {
    color: ${theme.colors.primary};
    font-size: 1.2em;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacings.small} 0;
    border-top: 1px solid ${theme.colors.lightGray};
    width: 100%;
    justify-content: center;
  }
`;