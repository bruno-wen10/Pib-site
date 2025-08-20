import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles/theme';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Importar axios
import { CardContent, CardImage, CardImageContainer, ErrorText, EventCard, EventDate, EventDescription, EventGrid, EventLocation, EventTitle, LoadingText, PageContainer, SaibaMaisButton, Title } from './EventosPage-Styled';

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



const EventosPageList: React.FC = () => {
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
              <SaibaMaisButton to={ `/eventos/${evento.id}`}>Mais Informações</SaibaMaisButton>
            </CardContent>
          </EventCard>
        ))}
      </EventGrid>
    </PageContainer>
  );
};

export default EventosPageList;

