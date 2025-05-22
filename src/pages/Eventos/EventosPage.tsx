import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles/theme';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Importar axios

// Interface para tipagem dos dados do evento
interface Evento {
  id: number;
  titulo: string;
  data: string;
  local: string;
  descricao: string;
  imagem: string;
  linkDetalhes?: string; // Opcional, se houver página de detalhes
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
  margin-bottom: ${theme.spacings.xlarge};
  font-family: ${theme.fonts.heading};
`;

const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${theme.spacings.large};
`;

const EventCard = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.5s ease-out forwards;
  opacity: 0;
  animation-delay: calc(var(--card-index) * 0.1s);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  }
`;

const CardImageContainer = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  background-color: ${theme.colors.lightBlueGray}; // Placeholder color
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${EventCard}:hover & {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: ${theme.spacings.medium};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const EventDate = styled.p`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.secondary};
  font-weight: 600;
  margin-bottom: ${theme.spacings.xsmall};
  text-transform: uppercase;
`;

const EventTitle = styled.h3`
  font-size: ${theme.fontSizes.xlarge};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacings.small};
  font-family: ${theme.fonts.heading};
  line-height: 1.3;
`;

const EventDescription = styled.p`
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacings.medium};
  line-height: 1.6;
  flex-grow: 1;
`;

const EventLocation = styled.p`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.mediumGray};
  margin-bottom: ${theme.spacings.medium};
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
  margin-top: auto; 

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

const EventosPage: React.FC = () => {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const response = await axios.get('http://localhost:3001/eventos');
        setEventos(response.data);
      } catch (err) {
        setError('Falha ao carregar os eventos. Tente novamente mais tarde.');
        console.error('Erro ao buscar eventos:', err);
      }
      setLoading(false);
    };

    fetchEventos();
  }, []);

  if (loading) {
    return <LoadingText>Carregando eventos...</LoadingText>;
  }

  if (error) {
    return <ErrorText>{error}</ErrorText>;
  }

  return (
    <PageContainer>
      <Title>Próximos Eventos</Title>
      {eventos.length === 0 && !loading && (
        <LoadingText>Nenhum evento encontrado.</LoadingText>
      )}
      <EventGrid>
        {eventos.map((evento, index) => (
          <EventCard key={evento.id} style={{ '--card-index': index } as React.CSSProperties}>
            <CardImageContainer>
              <CardImage src={evento.imagem} alt={`Imagem do evento ${evento.titulo}`} />
            </CardImageContainer>
            <CardContent>
              <EventDate>{evento.data}</EventDate>
              <EventTitle>{evento.titulo}</EventTitle>
              <EventDescription>{evento.descricao}</EventDescription>
              <EventLocation>Local: {evento.local}</EventLocation>
              {/* O link de detalhes pode ser dinâmico ou uma rota padrão */}
              <SaibaMaisButton to={evento.linkDetalhes || `/eventos/${evento.id}`}>Mais Informações</SaibaMaisButton>
            </CardContent>
          </EventCard>
        ))}
      </EventGrid>
    </PageContainer>
  );
};

export default EventosPage;

