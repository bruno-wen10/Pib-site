import { theme } from "@/styles/theme";
import { keyframes, styled } from "styled-components";


const fadeIn = keyframes`
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

export const CultosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacings.large};
`;

export const CultoCard = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.07);
  padding: ${theme.spacings.large};
  text-align: center;
  animation: ${fadeIn} 0.5s ease-out forwards;
  opacity: 0;
  animation-delay: calc(var(--card-index) * 0.1s);
  border-top: 5px solid ${theme.colors.secondary};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

export const CultoIcon = styled.div`
  font-size: 3rem;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacings.medium};
`;

export const CultoDia = styled.h3`
  font-size: ${theme.fontSizes.xlarge};
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.heading};
  margin-bottom: ${theme.spacings.xsmall};
`;

export const CultoHorario = styled.p`
  font-size: ${theme.fontSizes.large};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacings.small};
  font-weight: 600;
`;

export const CultoDescricao = styled.p`
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.mediumGray};
  line-height: 1.6;
  margin-bottom: ${theme.spacings.medium};
`;

export const CultoLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: ${theme.colors.primary};
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;

  svg {
    margin-right: ${theme.spacings.xsmall};
  }

  &:hover {
    color: ${theme.colors.secondary};
  }
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
