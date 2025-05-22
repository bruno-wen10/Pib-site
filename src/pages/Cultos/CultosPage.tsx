import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios'; // Importar axios
import { theme } from '../../styles/theme';
import { FaClock, FaMapMarkerAlt, FaVideo } from 'react-icons/fa';

// Interface para tipagem dos dados do culto
interface HorarioCulto {
  hora: string;
  descricao: string;
}

interface Culto {
  id: number;
  dia: string;
  horarios: HorarioCulto[];
  onlineLink?: string;
  local: string;
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

const CultosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacings.large};
`;

const CultoCard = styled.div`
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

const CultoIcon = styled.div`
  font-size: 3rem;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacings.medium};
`;

const CultoDia = styled.h3`
  font-size: ${theme.fontSizes.xlarge};
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.heading};
  margin-bottom: ${theme.spacings.xsmall};
`;

const CultoHorario = styled.p`
  font-size: ${theme.fontSizes.large};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacings.small};
  font-weight: 600;
`;

const CultoDescricao = styled.p`
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.mediumGray};
  line-height: 1.6;
  margin-bottom: ${theme.spacings.medium};
`;

const CultoLink = styled.a`
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

const CultosPage: React.FC = () => {
  const [cultos, setCultos] = useState<Culto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCultos = async () => {
      try {
        const response = await axios.get('http://localhost:3001/cultos');
        setCultos(response.data);
      } catch (err) {
        setError('Falha ao carregar os horários dos cultos. Tente novamente mais tarde.');
        console.error('Erro ao buscar cultos:', err);
      }
      setLoading(false);
    };

    fetchCultos();
  }, []);

  if (loading) {
    return <LoadingText>Carregando horários dos cultos...</LoadingText>;
  }

  if (error) {
    return <ErrorText>{error}</ErrorText>;
  }

  return (
    <PageContainer>
      <HeaderSection>
        <Title>Nossos Cultos</Title>
        <Subtitle>
          Participe conosco dos nossos momentos de adoração, aprendizado da Palavra e comunhão. 
          Confira nossos horários e programações.
        </Subtitle>
      </HeaderSection>

      {cultos.length === 0 && !loading && (
        <LoadingText>Nenhum horário de culto encontrado.</LoadingText>
      )}
      <CultosGrid>
        {cultos.map((culto, index) => (
          <CultoCard key={culto.id} style={{ '--card-index': index } as React.CSSProperties}>
            <CultoIcon><FaClock /></CultoIcon>
            <CultoDia>{culto.dia}</CultoDia>
            {culto.horarios.map(h => (
                <div key={`${culto.id}-${h.hora}`} style={{marginBottom: theme.spacings.small}}>
                    <CultoHorario>{h.hora}</CultoHorario>
                    <CultoDescricao>{h.descricao}</CultoDescricao>
                </div>
            ))}
            {culto.onlineLink && (
              <CultoLink href={culto.onlineLink} target="_blank" rel="noopener noreferrer">
                <FaVideo /> Assistir Online
              </CultoLink>
            )}
            <CultoDescricao style={{marginTop: theme.spacings.medium}}>
                <FaMapMarkerAlt style={{marginRight: '5px'}}/> Local: {culto.local}
            </CultoDescricao>
          </CultoCard>
        ))}
      </CultosGrid>
    </PageContainer>
  );
};

export default CultosPage;

