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

const TermosDeUsoPage: React.FC = () => {
  return (
    <PageContainer>
      <Title>Termos de Uso</Title>
      <ContentSection>
        <p><strong>Última atualização:</strong> 15 de Maio de 2025</p>

        <p>
          Bem-vindo ao website da [Nome da Igreja]! Ao acessar e usar nosso site, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso, que juntamente com nossa Política de Privacidade regem o relacionamento da [Nome da Igreja] com você em relação a este site. Se você discordar de qualquer parte destes termos e condições, por favor, não use nosso site.
        </p>

        <h2>1. Uso do Site</h2>
        <p>
          O conteúdo das páginas deste site é para sua informação geral e uso apenas. Ele está sujeito a alterações sem aviso prévio.
          Nem nós nem terceiros fornecemos qualquer garantia quanto à precisão, pontualidade, desempenho, integridade ou adequação das informações e materiais encontrados ou oferecidos neste site para qualquer finalidade específica. Você reconhece que tais informações e materiais podem conter imprecisões ou erros e nos isentamos expressamente da responsabilidade por quaisquer imprecisões ou erros na máxima extensão permitida por lei.
        </p>

        <h2>2. Propriedade Intelectual</h2>
        <p>
          Este site contém material que é de nossa propriedade ou licenciado para nós. Este material inclui, mas não está limitado a, design, layout, aparência, aparência e gráficos. A reprodução é proibida, exceto em conformidade com o aviso de direitos autorais, que faz parte destes termos e condições.
        </p>

        <h2>3. Links para Outros Sites</h2>
        <p>
          Nosso site pode conter links para outros sites de interesse. No entanto, uma vez que você tenha usado esses links para sair do nosso site, você deve notar que não temos qualquer controle sobre esse outro site. Portanto, não podemos ser responsáveis pela proteção e privacidade de qualquer informação que você fornecer enquanto visita tais sites e tais sites não são regidos por esta declaração de privacidade. Você deve ter cautela e olhar para a declaração de privacidade aplicável ao site em questão.
        </p>
        
        <h2>4. Limitação de Responsabilidade</h2>
        <p>
          O uso de qualquer informação ou material neste site é inteiramente por sua conta e risco, pelo qual não seremos responsáveis. Será sua própria responsabilidade garantir que quaisquer produtos, serviços ou informações disponíveis através deste site atendam às suas necessidades específicas.
        </p>

        <h2>5. Alterações nos Termos</h2>
        <p>
            Reservamo-nos o direito de modificar estes termos de uso a qualquer momento, portanto, revise-os frequentemente. As alterações e esclarecimentos entrarão em vigor imediatamente após sua publicação no site. 
        </p>

        <h2>Contate-Nos</h2>
        <p>
          Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco:
        </p>
        <ul>
          <li>Por e-mail: [emaildecontato@example.com]</li>
          <li>Visitando esta página em nosso website: [endereço do site]/contato</li>
        </ul>
      </ContentSection>
    </PageContainer>
  );
};

export default TermosDeUsoPage;

