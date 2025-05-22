import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import axios from 'axios'; // Importar axios
import { theme } from '../../styles/theme';

// Interfaces para tipagem dos dados
interface Ministerio {
  id: number;
  nome: string;
  slug: string;
  imagem: string;
  descricaoCurta: string;
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
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: ${theme.fontSizes.xxlarge};
  color: ${theme.colors.primary};
  text-align: center;
  margin-bottom: ${theme.spacings.medium};
  font-family: ${theme.fonts.heading};
`;

const IntroText = styled.p`
  font-size: ${theme.fontSizes.large};
  color: ${theme.colors.text};
  text-align: center;
  margin-bottom: ${theme.spacings.xlarge};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
`;

const MinisteriosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacings.large};
`;

const MinisterioCard = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.5s ease-out forwards;
  opacity: 0;
  animation-delay: calc(var(--card-index) * 0.1s); /* Delay for staggered animation */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: ${theme.spacings.medium};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardTitle = styled.h3`
  font-size: ${theme.fontSizes.xlarge};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacings.small};
  font-family: ${theme.fonts.heading};
`;

const CardDescription = styled.p`
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacings.medium};
  flex-grow: 1;
`;

const SaibaMaisButton = styled(Link)`
  display: inline-block;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: ${theme.spacings.small} ${theme.spacings.medium};
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
  font-weight: 600;
  transition: background-color 0.3s ease;
  margin-top: auto; // Alinha o botão na parte inferior do card

  &:hover {
    background-color: ${theme.colors.secondary};
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

const MinisteriosListPage: React.FC = () => {
  const [ministerios, setMinisterios] = useState<Ministerio[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMinisterios = async () => {
      try {
        // JSON Server rodará na porta 3001 por padrão, conforme script
        const response = await axios.get('http://localhost:3001/ministerios');
        setMinisterios(response.data);
      } catch (err) {
        setError('Falha ao carregar os ministérios. Tente novamente mais tarde.');
        console.error('Erro ao buscar ministérios:', err);
      }
      setLoading(false);
    };

    fetchMinisterios();
  }, []);

  if (loading) {
    return <LoadingText>Carregando ministérios...</LoadingText>;
  }

  if (error) {
    return <ErrorText>{error}</ErrorText>;
  }

  return (
    <PageContainer>
      <Title>Nossos Ministérios</Title>
      <IntroText>
        Conheça os ministérios da nossa igreja, áreas de serviço e comunhão onde você pode crescer na fé, 
        desenvolver seus dons e fazer a diferença na vida de outras pessoas. Encontre o seu lugar e junte-se a nós!
      </IntroText>
      {ministerios.length === 0 && !loading && (
        <LoadingText>Nenhum ministério encontrado.</LoadingText>
      )}
      <MinisteriosGrid>
        {ministerios.map((ministerio, index) => (
          <MinisterioCard key={ministerio.id} style={{ '--card-index': index } as React.CSSProperties}>
            <CardImage src={ministerio.imagem} alt={`Imagem do Ministério ${ministerio.nome}`} />
            <CardContent>
              <CardTitle>{ministerio.nome}</CardTitle>
              <CardDescription>{ministerio.descricaoCurta}</CardDescription>
              <SaibaMaisButton to={`/ministerios/${ministerio.slug}`}>Saiba Mais</SaibaMaisButton>
            </CardContent>
          </MinisterioCard>
        ))}
      </MinisteriosGrid>
    </PageContainer>
  );
};

export default MinisteriosListPage;

