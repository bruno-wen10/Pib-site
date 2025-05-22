import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import axios from 'axios'; // Importar axios
import { theme } from '../../styles/theme';
import { FaPlusCircle, FaPrayingHands, FaCommentDots } from 'react-icons/fa';

// Interfaces para tipagem dos dados
interface Comentario {
  id: number;
  autor: string;
  data: string;
  texto: string;
}
interface PedidoPiedade {
  id: number;
  autor: string;
  data: string;
  texto: string;
  interacoes: number;
  comentarios: Comentario[];
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
  background-color: ${theme.colors.background};
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

const AddPedidoButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: ${theme.spacings.small} ${theme.spacings.medium};
  border-radius: 50px; // Pill shape
  text-decoration: none;
  font-weight: 600;
  font-size: ${theme.fontSizes.medium};
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);

  svg {
    margin-right: ${theme.spacings.xsmall};
    font-size: 1.2em;
  }

  &:hover {
    background-color: ${theme.colors.secondary};
    transform: translateY(-2px);
  }
`;

const PedidosGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; // Single column for prayer requests
  gap: ${theme.spacings.large};
`;

const PedidoCard = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.07);
  padding: ${theme.spacings.medium};
  animation: ${fadeIn} 0.5s ease-out forwards;
  opacity: 0;
  animation-delay: calc(var(--card-index) * 0.1s);
  border-left: 5px solid ${theme.colors.secondary};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }
`;

const PedidoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacings.small};
`;

const PedidoAutor = styled.h3`
  font-size: ${theme.fontSizes.large};
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.heading};
  font-weight: 700;
`;

const PedidoData = styled.span`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.mediumGray};
`;

const PedidoTexto = styled.p`
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.text};
  line-height: 1.7;
  margin-bottom: ${theme.spacings.medium};
  white-space: pre-wrap; // Preserve line breaks
`;

const PedidoActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacings.medium};
  margin-bottom: ${theme.spacings.small}; // Espaço antes dos comentários
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.primary};
  font-size: ${theme.fontSizes.medium};
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 600;
  transition: color 0.3s ease;

  svg {
    margin-right: ${theme.spacings.xsmall};
    font-size: 1.1em;
  }

  &:hover {
    color: ${theme.colors.secondary};
  }
`;

const CommentsSection = styled.div`
  margin-top: ${theme.spacings.medium};
  padding-top: ${theme.spacings.small};
  border-top: 1px solid ${theme.colors.lightGray};
`;

const CommentCard = styled.div`
  background-color: ${theme.colors.lightBlueGray}20;
  padding: ${theme.spacings.small};
  border-radius: 4px;
  margin-bottom: ${theme.spacings.small};
  font-size: ${theme.fontSizes.small};
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacings.xsmall};
  font-weight: bold;
  color: ${theme.colors.primary};
`;

const CommentText = styled.p`
  color: ${theme.colors.text};
  line-height: 1.5;
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

const MuralPiedadePage: React.FC = () => {
  const [pedidos, setPedidos] = useState<PedidoPiedade[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPedidos = async () => {
    try {
      const response = await axios.get('http://localhost:3001/muralPiedade?_sort=id&_order=desc'); // Ordena por mais recente
      setPedidos(response.data);
    } catch (err) {
      setError('Falha ao carregar os pedidos de oração. Tente novamente mais tarde.');
      console.error('Erro ao buscar pedidos de oração:', err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPedidos();
  }, []);

  const handleInteracao = async (pedidoId: number) => {
    const pedidoOriginal = pedidos.find(p => p.id === pedidoId);
    if (!pedidoOriginal) return;

    const novasInteracoes = pedidoOriginal.interacoes + 1;

    try {
      await axios.patch(`http://localhost:3001/muralPiedade/${pedidoId}`, { interacoes: novasInteracoes });
      // Atualiza o estado local para refletir a mudança imediatamente
      setPedidos(prevPedidos => 
        prevPedidos.map(p => 
          p.id === pedidoId ? { ...p, interacoes: novasInteracoes } : p
        )
      );
    } catch (err) {
      console.error("Erro ao registrar interação:", err);
      alert("Falha ao registrar interação. Tente novamente.");
    }
  };

  if (loading) {
    return <LoadingText>Carregando pedidos de oração...</LoadingText>;
  }

  if (error) {
    return <ErrorText>{error}</ErrorText>;
  }

  return (
    <PageContainer>
      <HeaderSection>
        <Title>Mural da Piedade</Title>
        <Subtitle>
          Um espaço para compartilhar seus pedidos de oração e interceder uns pelos outros. 
          "Orai uns pelos outros, para serdes curados. Muito pode, por sua eficácia, a súplica do justo." (Tiago 5:16)
        </Subtitle>
        <AddPedidoButton to="/mural-piedade/novo">
          <FaPlusCircle /> Fazer um Pedido de Oração
        </AddPedidoButton>
      </HeaderSection>

      {pedidos.length === 0 && !loading && (
        <LoadingText>Nenhum pedido de oração encontrado.</LoadingText>
      )}
      <PedidosGrid>
        {pedidos.map((pedido, index) => (
          <PedidoCard key={pedido.id} style={{ '--card-index': index } as React.CSSProperties}>
            <PedidoHeader>
              <PedidoAutor>{pedido.autor}</PedidoAutor>
              <PedidoData>{pedido.data}</PedidoData>
            </PedidoHeader>
            <PedidoTexto>{pedido.texto}</PedidoTexto>
            <PedidoActions>
              <ActionButton onClick={() => handleInteracao(pedido.id)} title="Interceder por este pedido">
                <FaPrayingHands /> Interceder ({pedido.interacoes})
              </ActionButton>
              <ActionButton onClick={() => alert(`Funcionalidade de adicionar comentários ao pedido ${pedido.id} será implementada.`)} title="Ver ou adicionar comentários">
                <FaCommentDots /> Comentários ({pedido.comentarios ? pedido.comentarios.length : 0})
              </ActionButton>
            </PedidoActions>
            {pedido.comentarios && pedido.comentarios.length > 0 && (
              <CommentsSection>
                {/* <h4>Comentários:</h4> */}
                {pedido.comentarios.map(comentario => (
                  <CommentCard key={comentario.id}>
                    <CommentHeader>
                      <span>{comentario.autor}</span>
                      <span>{comentario.data}</span>
                    </CommentHeader>
                    <CommentText>{comentario.texto}</CommentText>
                  </CommentCard>
                ))}
              </CommentsSection>
            )}
          </PedidoCard>
        ))}
      </PedidosGrid>
    </PageContainer>
  );
};

export default MuralPiedadePage;

