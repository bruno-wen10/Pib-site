import React, { useState } from 'react';
import { theme } from '../../styles/theme';
import { FaUniversity, FaQrcode, FaCopy, FaWhatsapp } from 'react-icons/fa';
import { BankInfoGrid, ContributionSection, CopyButton, HeaderSection, InfoCard, OtherWaysText, PageContainer, QrCodeSection, SectionTitle, Subtitle, Title } from './ContribuicaoPageStyled';

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

const contribuicao: ContribuicaoData[] = [
  {
    pix: {
      chave: "45.310.554/0001-23",
      banco: "Banco do Brasil",
      titular: "Primeira Igreja Batista Em Franca/SP",
      qrCodeUrl: "./src/assets/QRcode.png"
    },
    contaBancaria: {
      banco: "Banco do Itaú",
      agencia: "0000",
      conta: "00000-0",
      titular: "Primeira Igreja Batista Em Franca/SP",
      cnpj: "45.310.554/0001-23"
    },
    contato: {
      telefone: "(16) 3403-4383",
      whatsapp: "1634034383", // Para o link do WhatsApp funcionar, sem caracteres especiais
      email: "financeiro@pib.org.br"
    }
  }
];

const ContribuaPage: React.FC = () => {
  const [copiedText, setCopiedText] = useState('');

  const handleCopy = (textToCopy: string, fieldName: string) => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopiedText(`Copiado: ${fieldName}`);
      setTimeout(() => setCopiedText(''), 2000);
    }).catch(err => {
      console.error('Erro ao copiar: ', err);
      setCopiedText('Erro ao copiar');
      setTimeout(() => setCopiedText(''), 2000);
    });
  };

  return (
    <PageContainer>
      <HeaderSection>
        <Title>Contribua</Title>
        <Subtitle>
          Sua generosidade nos ajuda a continuar espalhando a mensagem do Evangelho e a realizar nossos projetos e ministérios. 
          Veja como você pode ofertar e dizimar.
        </Subtitle>
      </HeaderSection>

      {contribuicao.map((contrib, idx) => (
        <React.Fragment key={idx}>
          <ContributionSection>
            <SectionTitle>Transferência Bancária / PIX</SectionTitle>
            <BankInfoGrid>
              <InfoCard>
                <h4><FaUniversity /> Dados Bancários</h4>
                <p><strong>Banco:</strong> {contrib.contaBancaria.banco}</p>
                <p><strong>Agência:</strong> {contrib.contaBancaria.agencia}</p>
                <p><strong>Conta Corrente:</strong> {contrib.contaBancaria.conta}</p>
                <p><strong>Nome:</strong> {contrib.contaBancaria.titular}</p>
                <p><strong>CNPJ:</strong> {contrib.contaBancaria.cnpj}</p>
                <CopyButton onClick={() => handleCopy(contrib.contaBancaria.cnpj, 'CNPJ')}> 
                  <FaCopy /> Copiar CNPJ (Chave PIX)
                </CopyButton>
              </InfoCard>

              <InfoCard>
                <h4><FaQrcode /> PIX com QR Code</h4>
                <QrCodeSection>
                  <img src={contrib.pix.qrCodeUrl} alt="QR Code para PIX" />
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
              <a href={`https://wa.me/${contrib.contato.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp /> {contrib.contato.telefone}
              </a>.
            </OtherWaysText>
          </ContributionSection>
        </React.Fragment>
      ))}

      <OtherWaysText style={{marginTop: theme.spacings.large}}>
        "Cada um contribua segundo propôs no seu coração; não com tristeza, ou por necessidade; porque Deus ama ao que dá com alegria." (2 Coríntios 9:7)
      </OtherWaysText>
    </PageContainer>
  );
};

export default ContribuaPage;