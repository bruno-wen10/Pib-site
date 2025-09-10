import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CardContent, CardImage, CardImageContainer, ErrorText, EventCard, EventDate, EventDescription, EventGrid, EventLocation, EventTitle, LoadingText, PageContainer, SaibaMaisButton, Title } from './EventosPage-Styled';
import { Evento } from '@/types/events';

const EventosPageList: React.FC = () => {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const response = await axios.get('http://localhost:3000/eventos');
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
              <CardImage src={evento.imagemEvento} alt={`Imagem do evento ${evento.nome_evento}`} />
            </CardImageContainer>
            <CardContent>
              <EventDate>{evento.dataInicio_evento}</EventDate>
              <EventTitle>{evento.nome_evento}</EventTitle>
              <EventDescription>{evento.descricao}</EventDescription>
              <EventLocation>Local: {evento.local}</EventLocation>
              <SaibaMaisButton to={`/eventos/${evento.id}`} onClick={() => console.log(`Navegando para o evento ${evento.id}`)}>Mais Informações</SaibaMaisButton>
            </CardContent>
          </EventCard>
        ))}
      </EventGrid>
    </PageContainer>
  );
};

export default EventosPageList;


