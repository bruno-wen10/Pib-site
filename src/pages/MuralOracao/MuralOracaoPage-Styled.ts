import { theme } from "@/styles/theme";
import { Link } from 'react-router-dom';
import { keyframes, styled } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const PageContainer = styled.div`
  padding: ${theme.spacings.large} ${theme.spacings.medium};
  animation: ${fadeIn} 0.8s ease-out;
  max-width: 900px;
  margin: 0 auto;
  background-color: ${theme.colors.background};
`;

export const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacings.xlarge};
`;

export const Title = styled.h1`
  font-size: ${theme.fontSizes.xxlarge};
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.heading};
  margin-bottom: ${theme.spacings.small};
`;

export const Subtitle = styled.p`
  font-size: ${theme.fontSizes.large};
  color: ${theme.colors.text};
  max-width: 700px;
  margin: 0 auto ${theme.spacings.medium} auto;
  line-height: 1.6;
`;

export const AddPedidoButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: ${theme.spacings.small} ${theme.spacings.medium};
  border-radius: 50px; 
  text-decoration: none;
  font-weight: 600;
  font-size: ${theme.fontSizes.medium};
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);

  svg {
    margin-right: ${theme.spacings.xsmall};
    font-size: 1.2em;
  }

  &:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.secondary};
    transform: translateY(-2px);
  }
`;

export const PedidosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colunas de tamanho igual */
  gap: ${theme.spacings.xsmall};
  margin-left: -200px;
    margin-right: -200px;
  margin-top: 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 1 coluna em mobile */
  }
`;

export const PedidoCard = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.07);
  padding: ${theme.spacings.medium};
  animation: ${fadeIn} 0.5s ease-out forwards;
  opacity: 0;
  animation-delay: calc(var(--card-index) * 0.1s);
  border-left: 5px solid ${theme.colors.secondary};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-200px);

    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
`;

export const PedidoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacings.small};
`;

export const PedidoAutor = styled.h3`
  font-size: ${theme.fontSizes.large};
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.heading};
  font-weight: 700;
`;

export const PedidoData = styled.span`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.mediumGray};
`;

export const PedidoTexto = styled.p`
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.text};
  line-height: 1.7;
  margin-bottom: ${theme.spacings.medium};
  white-space: pre-wrap; // Preserve line breaks
`;

export const PedidoActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacings.medium};
  margin-bottom: ${theme.spacings.small}; // Espaço antes dos comentários
`;

export const ActionButton = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.primary};
  font-size: ${theme.fontSizes.medium};
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 600;
  transition: color 0.3s ease;

  svg {
    margin-right: ${theme.spacings.xsmall};
    font-size: 1.1em;
  }

  &:hover {
    color: ${theme.colors.secondary};
  }
`;

export const CommentsSection = styled.div`
  margin-top: ${theme.spacings.medium};
  padding-top: ${theme.spacings.small};
  border-top: 1px solid ${theme.colors.lightGray};
`;

export const CommentCard = styled.div`
  background-color: ${theme.colors.lightBlueGray}20;
  padding: ${theme.spacings.small};
  border-radius: 4px;
  margin-bottom: ${theme.spacings.small};
  font-size: ${theme.fontSizes.small};
`;

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacings.xsmall};
  font-weight: bold;
  color: ${theme.colors.primary};
`;

export const CommentText = styled.p`
  color: ${theme.colors.text};
  line-height: 1.5;
`;

export const LoadingText = styled.p`
  text-align: center;
  font-size: ${theme.fontSizes.large};
  color: ${theme.colors.primary};
  padding: ${theme.spacings.xlarge};
`;

export const ErrorText = styled.p`
  text-align: center;
  font-size: ${theme.fontSizes.large};
  color: red;
  padding: ${theme.spacings.xlarge};
`;