// MuralPiedadePage.tsx
import React, { useEffect, useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { 
  AddPedidoButton, 
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
import IntercessaoButton from './Button-Intercecao';


const MuralPiedadePage: React.FC = () => {
  const [pedidos, setPedidos] = useState<PedidoPiedade[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const formatarDataBr = (dataISO: string): string => {
    return new Date(dataISO).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  const fetchPedidos = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await muralPiedadeService.getPedidos();
      const pedidosOrdenados = data.sort((a, b) => 
        new Date(b.data_criacao).getTime() - new Date(a.data_criacao).getTime()
      );
      setPedidos(pedidosOrdenados);
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

  const handleInterceder = async (pedidoId: string, novasInteracoes: number) => {
    try {
      await muralPiedadeService.updateOrandoPeloPedido(pedidoId, novasInteracoes);
      // Opcional: atualizar a lista principal após sucesso
      setPedidos(prev => prev.map(p => 
        p.id === pedidoId ? { ...p, interacoes: novasInteracoes } : p
      ));
    } catch (err) {
      console.error('Erro na API:', err);
      throw err; // Propaga o erro para o componente do botão
    }
  };

  return (
    <PageContainer>
      <HeaderSection>
        <Title>Mural da Piedade</Title>
        <Subtitle>
          Um espaço para compartilhar seus pedidos de oração e interceder uns pelos outros. 
          "Orai uns pelos outros, para serdes curados. Muito pode, por sua eficácia, a súplica do justo." (Tiago 5:16)
        </Subtitle>
        <AddPedidoButton to="/mural-oracao/novo">
          <FaPlusCircle /> Fazer um Pedido de Oração
        </AddPedidoButton>
      </HeaderSection>

      {loading && <LoadingText>Carregando pedidos de oração...</LoadingText>}
      
      {error && <div style={{color: 'red', textAlign: 'center'}}>{error}</div>}
      
      {!loading && !error && pedidos.length === 0 && (
        <LoadingText>Nenhum pedido de oração encontrado.</LoadingText>
      )}
      
      <PedidosGrid>
        {pedidos.map((pedido, index) => (
          <PedidoCard key={pedido.id} style={{ '--card-index': index } as React.CSSProperties}>
            <PedidoHeader>
              <PedidoAutor>{pedido.nome}</PedidoAutor>
              <PedidoData>{formatarDataBr(pedido.data_criacao)}</PedidoData>
            </PedidoHeader>
            <PedidoTexto>{pedido.pedido_oracao}</PedidoTexto>
            <PedidoActions>
              <IntercessaoButton
                pedidoId={pedido.id}
                interacoesIniciais={pedido.interacoes}
                onInterceder={handleInterceder}
              />
            </PedidoActions>
          </PedidoCard>
        ))}
      </PedidosGrid>
    </PageContainer>
  );
};

export default MuralPiedadePage;


