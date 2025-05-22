import React from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles/theme';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageContainer = styled.div`
  padding: ${theme.spacings.large} ${theme.spacings.medium};
  animation: ${fadeIn} 0.8s ease-out;
  max-width: 800px;
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

const ContentSection = styled.section`
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.text};
  line-height: 1.8;

  h2 {
    font-size: ${theme.fontSizes.xlarge};
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.heading};
    margin-top: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.small};
  }

  p {
    margin-bottom: ${theme.spacings.medium};
  }

  ul {
    list-style: disc;
    margin-left: ${theme.spacings.medium};
    margin-bottom: ${theme.spacings.medium};
  }

  li {
    margin-bottom: ${theme.spacings.xsmall};
  }
`;

const PoliticaDePrivacidadePage: React.FC = () => {
  return (
    <PageContainer>
      <Title>Política de Privacidade</Title>
      <ContentSection>
        <p><strong>Última atualização:</strong> 15 de Maio de 2025</p>

        <p>
          A [Nome da Igreja] ("nós", "nosso") opera o website [endereço do site] (o "Serviço").
          Esta página informa sobre nossas políticas relativas à coleta, uso e divulgação de dados pessoais quando você usa nosso Serviço e as escolhas que você associou a esses dados. 
          Nós usamos seus dados para fornecer e melhorar o Serviço. Ao usar o Serviço, você concorda com a coleta e uso de informações de acordo com esta política. 
          Salvo definição em contrário nesta Política de Privacidade, os termos utilizados nesta Política de Privacidade têm o mesmo significado que os nossos Termos e Condições, acessíveis em [endereço do site]/termos-de-uso.
        </p>

        <h2>Coleta e Uso de Informações</h2>
        <p>
          Coletamos vários tipos diferentes de informações para diversos fins, a fim de fornecer e melhorar nosso Serviço para você.
        </p>

        <h3>Tipos de Dados Coletados</h3>
        <h4>Dados Pessoais</h4>
        <p>
          Ao usar nosso Serviço, podemos pedir que você nos forneça certas informações de identificação pessoal que podem ser usadas para contatá-lo ou identificá-lo ("Dados Pessoais"). As informações de identificação pessoal podem incluir, mas não se limitam a:
        </p>
        <ul>
          <li>Endereço de e-mail</li>
          <li>Nome e sobrenome</li>
          <li>Número de telefone</li>
          <li>Endereço, Estado, Província, CEP/Código Postal, Cidade</li>
          <li>Cookies e Dados de Uso</li>
        </ul>

        <h4>Dados de Uso</h4>
        <p>
          Também podemos coletar informações sobre como o Serviço é acessado e usado ("Dados de Uso"). Estes Dados de Uso podem incluir informações como o endereço de Protocolo de Internet do seu computador (por exemplo, endereço IP), tipo de navegador, versão do navegador, as páginas do nosso Serviço que você visita, a hora e data da sua visita, o tempo gasto nessas páginas, identificadores únicos de dispositivos e outros dados de diagnóstico.
        </p>

        {/* Adicionar mais seções conforme necessário: Uso de Dados, Transferência de Dados, Divulgação de Dados, Segurança de Dados, Seus Direitos de Proteção de Dados Sob a LGPD, Provedores de Serviços, Links para Outros Sites, Privacidade Infantil, Alterações a Esta Política de Privacidade, Contate-Nos */}
        <h2>Seus Direitos de Proteção de Dados sob a LGPD</h2>
        <p>
            Se você é um residente do Brasil, você tem certos direitos de proteção de dados sob a Lei Geral de Proteção de Dados (LGPD). A [Nome da Igreja] visa tomar medidas razoáveis para permitir que você corrija, altere, exclua ou limite o uso de seus Dados Pessoais.
        </p>
        <p>Se você deseja ser informado sobre quais Dados Pessoais mantemos sobre você e se você quer que eles sejam removidos de nossos sistemas, por favor, entre em contato conosco.</p>
        <p>Em certas circunstâncias, você tem os seguintes direitos de proteção de dados:</p>
        <ul>
            <li>O direito de acessar, atualizar ou excluir as informações que temos sobre você.</li>
            <li>O direito de retificação.</li>
            <li>O direito de objeção.</li>
            <li>O direito de restrição.</li>
            <li>O direito à portabilidade de dados.</li>
            <li>O direito de retirar o consentimento.</li>
        </ul>

        <h2>Contate-Nos</h2>
        <p>
          Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco:
        </p>
        <ul>
          <li>Por e-mail: [emaildecontato@example.com]</li>
          <li>Visitando esta página em nosso website: [endereço do site]/contato</li>
        </ul>
      </ContentSection>
    </PageContainer>
  );
};

// Salvar como src/pages/PoliticaDePrivacidade/PoliticaDePrivacidadePage.tsx
export default PoliticaDePrivacidadePage;

