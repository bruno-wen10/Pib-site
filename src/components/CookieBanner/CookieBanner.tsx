import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const CookieBannerContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: ${theme.spacings.medium};
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

const CookieText = styled.p`
  margin: 0;
  font-size: ${theme.fontSizes.medium};
  max-width: 70%;

  a {
    color: ${theme.colors.white};
    text-decoration: underline;
    font-weight: bold;
    
    &:hover {
      color: ${theme.colors.lightBlueGray};
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    max-width: 100%;
    margin-bottom: ${theme.spacings.small};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacings.small};

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
    justify-content: center;
  }
`;

const Button = styled.button`
  padding: ${theme.spacings.xsmall} ${theme.spacings.small};
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: ${theme.fonts.main};
`;

const AcceptButton = styled(Button)`
  background-color: ${theme.colors.white};
  color: ${theme.colors.primary};

  &:hover {
    background-color: ${theme.colors.lightGray};
  }
`;

const RejectButton = styled(Button)`
  background-color: transparent;
  color: ${theme.colors.white};
  border: 1px solid ${theme.colors.white};

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

interface CookieBannerProps {
  onAccept: () => void;
  onReject: () => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ onAccept, onReject }) => {
  return (
    <CookieBannerContainer role="alert" aria-live="polite">
      <CookieText>
        Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com nossa <a href="/politica-de-privacidade">Política de Privacidade</a>.
      </CookieText>
      <ButtonGroup>
        <RejectButton onClick={onReject}>Recusar</RejectButton>
        <AcceptButton onClick={onAccept}>Aceitar</AcceptButton>
      </ButtonGroup>
    </CookieBannerContainer>
  );
};

export default CookieBanner;
