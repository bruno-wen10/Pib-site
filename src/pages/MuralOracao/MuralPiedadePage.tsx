import React, { useEffect, useState } from 'react';
import { FaPlusCircle, FaPrayingHands, FaCommentDots } from 'react-icons/fa';
import { 
  ActionButton, 
  AddPedidoButton, 
  CommentCard, 
  CommentHeader, 
  CommentsSection, 
  CommentText, 
  ErrorText, 
  HeaderSection, 
  LoadingText, 
  PageContainer, 
  PedidoActions, 
  PedidoAutor, 
  PedidoCard, 
  PedidoData, 
  PedidoHeader, 
  PedidosGrid, 
  PedidoTexto, 
  Subtitle, 
  Title 
} from './MuralOracaoPage-Styled';
import { PedidoPiedade } from '@/types/mural-oracao';
import { muralPiedadeService } from '@/services/MuralOracao-API/mural-oracao-API';

const MuralPiedadePage: React.FC = () => {
  const [pedidos, setPedidos] = useState<PedidoPiedade[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPedidos = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await muralPiedadeService.getPedidos();
      setPedidos(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Falha ao carregar os pedidos de oração. Tente novamente mais tarde.';
      setError(errorMessage);
      console.error('Erro ao buscar pedidos de oração:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPedidos();
  }, []);

  const handleInteracao = async (pedidoId: number) => {
    const pedidoOriginal = pedidos.find(p => p.id === pedidoId);
    if (!pedidoOriginal) return;

    const novasInteracoes = pedidoOriginal.interacoes + 1;

    try {
      await muralPiedadeService.updateInteracoes(pedidoId, novasInteracoes);
      
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

  const handleComentariosClick = (pedidoId: number) => {
    alert(`Funcionalidade de adicionar comentários ao pedido ${pedidoId} será implementada.`);
    // Futuramente você pode implementar um modal ou expandir a seção de comentários aqui
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
              <ActionButton 
                onClick={() => handleInteracao(pedido.id)} 
                
                title="Interceder por este pedido"
              >
                <FaPrayingHands /> Interceder ({pedido.interacoes})
              </ActionButton>
              <ActionButton 
                onClick={() => handleComentariosClick(pedido.id)} 
                title="Ver ou adicionar comentários"
              >
                <FaCommentDots /> Comentários ({pedido.comentarios ? pedido.comentarios.length : 0})
              </ActionButton>
            </PedidoActions>
            {pedido.comentarios && pedido.comentarios.length > 0 && (
              <CommentsSection>
                {pedido.comentarios.map((comentario: { id: React.Key | null | undefined; autor: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; data: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; texto: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
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