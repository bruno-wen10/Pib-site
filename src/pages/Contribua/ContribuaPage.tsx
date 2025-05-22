import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import { theme } from '../../styles/theme';
import { FaUniversity, FaQrcode, FaCopy, FaWhatsapp } from 'react-icons/fa';

// Interface para tipagem dos dados de contribuição
interface ContribuicaoData {
  pix: {
    chave: string;
    banco: string;
    titular: string;
    qrCodeUrl: string;
  };
  contaBancaria: {
    banco: string;
    agencia: string;
    conta: string;
    titular: string;
    cnpj: string;
  };
  contato: {
    telefone: string;
    whatsapp: string;
    email: string;
  };
}

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

const PageContainer = styled.div`
  padding: ${theme.spacings.large} ${theme.spacings.medium};
  animation: ${fadeIn} 0.8s ease-out;
  max-width: 900px;
  margin: 0 auto;
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacings.xlarge};
`;

const Title = styled.h1`
  font-size: ${theme.fontSizes.xxlarge};
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.heading};
  margin-bottom: ${theme.spacings.small};
`;

const Subtitle = styled.p`
  font-size: ${theme.fontSizes.large};
  color: ${theme.colors.text};
  max-width: 700px;
  margin: 0 auto ${theme.spacings.medium} auto;
  line-height: 1.6;
`;

const ContributionSection = styled.section`
  background-color: ${theme.colors.white};
  padding: ${theme.spacings.large};
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.07);
  margin-bottom: ${theme.spacings.large};
  animation: ${fadeIn} 0.5s ease-out forwards;
  opacity: 0;
  animation-delay: 0.2s;
`;

const SectionTitle = styled.h2`
  font-size: ${theme.fontSizes.xlarge};
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.heading};
  margin-bottom: ${theme.spacings.medium};
  border-bottom: 2px solid ${theme.colors.secondary};
  padding-bottom: ${theme.spacings.xsmall};
  display: inline-block;
`;

const BankInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${theme.spacings.large};
  margin-bottom: ${theme.spacings.large};
`;

const InfoCard = styled.div`
  background-color: ${theme.colors.lightBlueGray}20; // Light background
  padding: ${theme.spacings.medium};
  border-radius: 6px;
  border: 1px solid ${theme.colors.lightGray};

  h4 {
    font-size: ${theme.fontSizes.large};
    color: ${theme.colors.secondary};
    margin-bottom: ${theme.spacings.small};
    display: flex;
    align-items: center;
    svg {
      margin-right: ${theme.spacings.xsmall};
    }
  }

  p {
    font-size: ${theme.fontSizes.medium};
    color: ${theme.colors.text};
    line-height: 1.7;
    margin-bottom: ${theme.spacings.xsmall};
    word-break: break-word;
  }

  strong {
    font-weight: 600;
  }
`;

const CopyButton = styled.button`
  background-color: ${theme.colors.primary};
  color: white;
  border: none;
  padding: ${theme.spacings.xsmall} ${theme.spacings.small};
  border-radius: 4px;
  cursor: pointer;
  font-size: ${theme.fontSizes.small};
  display: inline-flex;
  align-items: center;
  transition: background-color 0.3s ease;
  margin-top: ${theme.spacings.xsmall};

  svg {
    margin-right: 5px;
  }

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;

const QrCodeSection = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacings.large};

  img {
    max-width: 250px;
    height: auto;
    border: 5px solid ${theme.colors.lightGray};
    border-radius: 8px;
    margin: 0 auto ${theme.spacings.small} auto;
  }
`;

const OtherWaysText = styled.p`
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.text};
  text-align: center;
  line-height: 1.6;

  a {
    color: ${theme.colors.primary};
    font-weight: 600;
    text-decoration: underline;
    &:hover {
      color: ${theme.colors.secondary};
    }
  }
`;

const LoadingText = styled.p`
  text-align: center;
  font-size: ${theme.fontSizes.large};
  color: ${theme.colors.primary};
  padding: ${theme.spacings.xlarge};
`;

const ErrorText = styled.p`
  text-align: center;
  font-size: ${theme.fontSizes.large};
  color: red;
  padding: ${theme.spacings.xlarge};
`;

const ContribuaPage: React.FC = () => {
  const [contribuicaoData, setContribuicaoData] = useState<ContribuicaoData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [copiedText, setCopiedText] = useState('');

  useEffect(() => {
    const fetchContribuicaoData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/contribuicao');
        setContribuicaoData(response.data);
      } catch (err) {
        setError('Falha ao carregar as informações de contribuição. Tente novamente mais tarde.');
        console.error('Erro ao buscar dados de contribuição:', err);
      }
      setLoading(false);
    };

    fetchContribuicaoData();
  }, []);

  const handleCopy = (textToCopy: string, fieldName: string) => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopiedText(`Copiado: ${fieldName}`);
      setTimeout(() => setCopiedText(''), 2000); // Clear message after 2 seconds
    }).catch(err => {
      console.error('Erro ao copiar: ', err);
      setCopiedText('Erro ao copiar');
      setTimeout(() => setCopiedText(''), 2000);
    });
  };

  if (loading) {
    return <LoadingText>Carregando informações de contribuição...</LoadingText>;
  }

  if (error || !contribuicaoData) {
    return <ErrorText>{error || 'Dados não encontrados'}</ErrorText>;
  }

  return (
    <PageContainer>
      <HeaderSection>
        <Title>Contribua</Title>
        <Subtitle>
          Sua generosidade nos ajuda a continuar espalhando a mensagem do Evangelho e a realizar nossos projetos e ministérios. 
          Veja como você pode ofertar e dizimar.
        </Subtitle>
      </HeaderSection>

      <ContributionSection>
        <SectionTitle>Transferência Bancária / PIX</SectionTitle>
        <BankInfoGrid>
          <InfoCard>
            <h4><FaUniversity /> Dados Bancários</h4>
            <p><strong>Banco:</strong> {contribuicaoData.contaBancaria.banco}</p>
            <p><strong>Agência:</strong> {contribuicaoData.contaBancaria.agencia}</p>
            <p><strong>Conta Corrente:</strong> {contribuicaoData.contaBancaria.conta}</p>
            <p><strong>Nome:</strong> {contribuicaoData.contaBancaria.titular}</p>
            <p><strong>CNPJ:</strong> {contribuicaoData.contaBancaria.cnpj}</p>
            <CopyButton onClick={() => handleCopy(contribuicaoData.contaBancaria.cnpj, 'CNPJ')}> 
              <FaCopy /> Copiar CNPJ (Chave PIX)
            </CopyButton>
          </InfoCard>

          <InfoCard>
            <h4><FaQrcode /> PIX com QR Code</h4>
            <QrCodeSection>
              <img src={contribuicaoData.pix.qrCodeUrl} alt="QR Code para PIX" />
              <p>Aponte a câmera do seu celular para o QR Code acima.</p>
            </QrCodeSection>
          </InfoCard>
        </BankInfoGrid>
        {copiedText && <p style={{ textAlign: 'center', color: theme.colors.secondary, marginBottom: theme.spacings.small }}>{copiedText}</p>}
      </ContributionSection>

      <ContributionSection style={{animationDelay: '0.4s'}}>
        <SectionTitle>Outras Formas de Contribuir</SectionTitle>
        <OtherWaysText>
          Você também pode entregar sua oferta ou dízimo presencialmente durante nossos cultos e celebrações. 
          Para mais informações ou se precisar de ajuda, entre em contato conosco através do nosso WhatsApp: 
          <a href={`https://wa.me/${contribuicaoData.contato.whatsapp}`} target="_blank" rel="noopener noreferrer">
             <FaWhatsapp /> {contribuicaoData.contato.telefone}
          </a>.
        </OtherWaysText>
      </ContributionSection>

      <OtherWaysText style={{marginTop: theme.spacings.large}}>
        "Cada um contribua segundo propôs no seu coração; não com tristeza, ou por necessidade; porque Deus ama ao que dá com alegria." (2 Coríntios 9:7)
      </OtherWaysText>
    </PageContainer>
  );
};

export default ContribuaPage;
