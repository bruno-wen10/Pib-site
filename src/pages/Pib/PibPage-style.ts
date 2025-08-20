import { theme } from "@/styles/theme";
import styled, { keyframes } from "styled-components";





export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const PageContainer = styled.div`
  padding: ${theme.spacings.large} ${theme.spacings.medium};
  animation: ${fadeIn} 0.8s ease-out;
  max-width: 900px;
  margin: 0 auto;
  background-color: ${theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-top: ${theme.spacings.large};
  margin-bottom: ${theme.spacings.large};
`;

export const Title = styled.h1`
  font-size: ${theme.fontSizes.xxlarge};
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.heading};
  margin-bottom: ${theme.spacings.medium};
  text-align: center;
`;

export const Section = styled.section`
  margin-bottom: ${theme.spacings.xlarge};
  animation: ${fadeIn} 0.5s ease-out forwards;
  opacity: 0;

  &:nth-child(1) {
    animation-delay: 0.2s;
  }
  &:nth-child(2) {
    animation-delay: 0.4s;
  }
  &:nth-child(3) {
    animation-delay: 0.6s;
  }
  &:nth-child(4) {
    animation-delay: 0.8s;
  }
`;

export const SectionTitle = styled.h2`
  font-size: ${theme.fontSizes.xlarge};
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.heading};
  margin-bottom: ${theme.spacings.medium};
  padding-bottom: ${theme.spacings.xsmall};
  border-bottom: 2px solid ${theme.colors.secondary};
  display: inline-block;
`;

export const Paragraph = styled.p`
  margin-top: ${theme.spacings.small};
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.text};
  line-height: 1.8;
  margin-bottom: ${theme.spacings.small};
`;

export const ImagePlaceholder = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImagePerfilContainer = styled.div`
  display: flex;
  gap: ${theme.spacings.medium};
  align-items: center;
  justify-content: center;
`;

export const ImagePerfil = styled.div`
  width: 30%;
  height: 300px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;