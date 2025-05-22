import React from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles/theme';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageContainer = styled.div`
  padding: ${theme.spacings.large} ${theme.spacings.medium};
  animation: ${fadeIn} 0.8s ease-out;
  max-width: 900px;
  margin: 0 auto;
  background-color: ${theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  margin-top: ${theme.spacings.large};
  margin-bottom: ${theme.spacings.large};
`;

const Title = styled.h1`
  font-size: ${theme.fontSizes.xxlarge};
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.heading};
  margin-bottom: ${theme.spacings.medium};
  text-align: center;
`;

const Section = styled.section`
  margin-bottom: ${theme.spacings.xlarge};
  animation: ${fadeIn} 0.5s ease-out forwards;
  opacity: 0;
  
  &:nth-child(1) { animation-delay: 0.2s; }
  &:nth-child(2) { animation-delay: 0.4s; }
  &:nth-child(3) { animation-delay: 0.6s; }
  &:nth-child(4) { animation-delay: 0.8s; }
`;

const SectionTitle = styled.h2`
  font-size: ${theme.fontSizes.xlarge};
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.heading};
  margin-bottom: ${theme.spacings.medium};
  padding-bottom: ${theme.spacings.xsmall};
  border-bottom: 2px solid ${theme.colors.secondary};
  display: inline-block;
`;

const Paragraph = styled.p`
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.text};
  line-height: 1.8;
  margin-bottom: ${theme.spacings.small};
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${theme.colors.lightGray};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.mediumGray};
  font-size: ${theme.fontSizes.large};
  margin: ${theme.spacings.medium} 0;
`;

const PibPage: React.FC = () => {
  return (
    <PageContainer>
      <Title>Sobre a PIB [Nome da Cidade]</Title>

      <Section>
        <SectionTitle>Nossa História</SectionTitle>
        <ImagePlaceholder>Imagem Genérica (Nossa História)</ImagePlaceholder>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </Paragraph>
        <Paragraph>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
          Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. 
          Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>No Que Cremos</SectionTitle>
        <Paragraph>
          Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. 
          Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. 
          Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam.
        </Paragraph>
        <Paragraph>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. 
          Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. 
          Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus.
        </Paragraph>
        <ImagePlaceholder>Imagem Genérica (No Que Cremos)</ImagePlaceholder>
      </Section>

      <Section>
        <SectionTitle>Nossa Missão, Visão e Valores</SectionTitle>
        <Paragraph>
          <strong>Missão:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et malesuada fames. 
        </Paragraph>
        <Paragraph>
          <strong>Visão:</strong> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Consectetur adipiscing elit pellentesque habitant morbi.
        </Paragraph>
        <Paragraph>
          <strong>Valores:</strong> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </Paragraph>
      </Section>

      {/* A seção de liderança foi solicitada para ser excluída, então não será adicionada aqui */}
      
    </PageContainer>
  );
};

export default PibPage;

