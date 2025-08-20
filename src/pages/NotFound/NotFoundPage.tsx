import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 160px); // Full height minus header and footer (approx)
  padding: ${theme.spacings.large};
  text-align: center;
  animation: ${fadeIn} 0.8s ease-out;
  background-color: ${theme.colors.background};
`;

const IconWrapper = styled.div`
  font-size: 5rem;
  color: ${theme.colors.secondary};
  margin-bottom: ${theme.spacings.medium};
`;

const Title = styled.h1`
  font-size: ${theme.fontSizes.xxlarge};
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.heading};
  margin-bottom: ${theme.spacings.small};
`;

const Message = styled.p`
  font-size: ${theme.fontSizes.large};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacings.large};
  max-width: 500px;
`;

const HomeButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: ${theme.spacings.medium} ${theme.spacings.large};
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: ${theme.fontSizes.medium};
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);

  svg {
    margin-right: ${theme.spacings.small};
  }

  &:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.secondary};
    transform: translateY(-2px);
  }
`;

const NotFoundPage: React.FC = () => {
  return (
    <PageContainer>
      <IconWrapper>
        <FaExclamationTriangle />
      </IconWrapper>
      <Title>Oops! Página Não Encontrada</Title>
      <Message>
        A página que você está procurando não existe ou foi movida. 
        Verifique o endereço digitado ou volte para a página inicial.
      </Message>
      <HomeButton to="/">
        <FaHome /> Voltar para a Página Inicial
      </HomeButton>
    </PageContainer>
  );
};

export default NotFoundPage;

