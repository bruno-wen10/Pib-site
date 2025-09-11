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



// import React, { useEffect, useState } from 'react';
// import { FaPlusCircle,
//    FaPrayingHands,
//    //FaCommentDots

//  } from 'react-icons/fa';
// import { 
//   ActionButton, 
//   AddPedidoButton, 
//   // CommentCard, 
//   // CommentHeader, 
//   // CommentsSection, 
//   // CommentText, 
//   //ErrorText, 
//   HeaderSection, 
//   LoadingText, 
//   PageContainer, 
//   PedidoActions, 
//   PedidoAutor, 
//   PedidoCard, 
//   PedidoData, 
//   PedidoHeader, 
//   PedidosGrid, 
//   PedidoTexto, 
//   Subtitle, 
//   Title 
// } from './MuralOracaoPage-Styled';
// import { PedidoPiedade } from '@/types/mural-oracao';
// import { muralPiedadeService } from '@/services/MuralOracao-API/mural-oracao-API';

// const MuralPiedadePage: React.FC = () => {
//   const [pedidos, setPedidos] = useState<PedidoPiedade[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [interacoesAtualizadas, setInteracoesAtualizadas] = useState<{ [key: string]: number }>({});

//   const formatarDataBr = (dataISO: string): string => {
//     return new Date(dataISO).toLocaleDateString('pt-BR', {
//       day: '2-digit',
//       month: 'long',
//       year: 'numeric',
//     });
//   };

//   const fetchPedidos = async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const data = await muralPiedadeService.getPedidos();
//       const pedidosOrdenados = data.sort((a, b) => 
//         new Date(b.data_criacao).getTime() - new Date(a.data_criacao).getTime()
//       );
//       setPedidos(pedidosOrdenados);
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'Falha ao carregar os pedidos de oração. Tente novamente mais tarde.';
//       setError(errorMessage);
//       console.error('Erro ao buscar pedidos de oração:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchPedidos();
//   }, []);

//   // Função para obter o número atualizado de interações de um pedido
//   const getInteracoesAtualizadas = (pedidoId: string, interacoesOriginais: number) => {
//     return interacoesAtualizadas[pedidoId] !== undefined 
//       ? interacoesAtualizadas[pedidoId] 
//       : interacoesOriginais;
//   };

//   const orandoPeloPedido = async (pedidoId: string) => {
//     const pedido = pedidos.find(p => p.id === pedidoId);
//     if (!pedido) return;

//     // Calcula o novo valor de interações
//     const novasInteracoes = getInteracoesAtualizadas(pedidoId, pedido.interacoes) + 1;

//     // 1. ATUALIZAÇÃO IMEDIATA DO ESTADO (causa re-renderização)
//     setInteracoesAtualizadas(prev => ({
//       ...prev,
//       [pedidoId]: novasInteracoes
//     }));

//     try {
//       // 2. Chamada à API em segundo plano
//       await muralPiedadeService.updateOrandoPeloPedido(pedidoId, novasInteracoes);
      
//       // 3. Atualiza também a lista de pedidos para sincronizar com o servidor
//       setPedidos(prevPedidos => 
//         prevPedidos.map(p => 
//           p.id === pedidoId 
//             ? { ...p, interacoes: novasInteracoes }
//             : p
//         )
//       );

//     } catch (err) {
//       console.error("Erro ao registrar interação:", err);
      
//       // 4. REVERTE a atualização em caso de erro
//       setInteracoesAtualizadas(prev => ({
//         ...prev,
//         [pedidoId]: pedido.interacoes
//       }));
      
//       alert("Falha ao registrar interação. Tente novamente.");
//     }
//   }
//   // const handleInteracao = async (pedidoId: string) => {
//   //   const pedidoOriginal = pedidos.find(p => p.id === pedidoId);
//   //   if (!pedidoOriginal) return;

//   //   const novasInteracoes = pedidoOriginal.interacoes + 1;

//   //   try {
//   //     await muralPiedadeService.updateInteracoes(pedidoId, novasInteracoes);
      
//   //     // Atualiza o estado local para refletir a mudança imediatamente
//   //     setPedidos(prevPedidos => 
//   //       prevPedidos.map(p => 
//   //         p.id === pedidoId ? { ...p, interacoes: novasInteracoes } : p
//   //       )
//   //     );
//   //   } catch (err) {
//   //     console.error("Erro ao registrar interação:", err);
//   //     alert("Falha ao registrar interação. Tente novamente.");
//   //   }
//   // };
 

//  // será implementado depois
//   // const handleComentariosClick = (pedidoId: number) => {
//   //   alert(`Funcionalidade de adicionar comentários ao pedido ${pedidoId} será implementada.`);
//   //   // Futuramente você pode implementar um modal ou expandir a seção de comentários aqui
//   // };

//   // if (loading) {
//   //   return <LoadingText>Carregando pedidos de oração...</LoadingText>;
//   // }

//   // if (error) {
//   //   return <ErrorText>{error}</ErrorText>;
//   // }

//   return (
//     <PageContainer>
//       <HeaderSection>
//         <Title>Mural da Piedade</Title>
//         <Subtitle>
//           Um espaço para compartilhar seus pedidos de oração e interceder uns pelos outros. 
//           "Orai uns pelos outros, para serdes curados. Muito pode, por sua eficácia, a súplica do justo." (Tiago 5:16)
//         </Subtitle>
//         <AddPedidoButton to="/mural-oracao/novo">
//           <FaPlusCircle /> Fazer um Pedido de Oração
//         </AddPedidoButton>
//       </HeaderSection>

//       {pedidos.length === 0 && !loading && (
//         <LoadingText>Nenhum pedido de oração encontrado.</LoadingText>
//       )}
      
//       <PedidosGrid>
//         {pedidos.map((pedido, index) => (
//           <PedidoCard key={pedido.id} style={{ '--card-index': index } as React.CSSProperties}>
//             <PedidoHeader>
//               <PedidoAutor>{pedido.nome}</PedidoAutor>
//               <PedidoData>{formatarDataBr(pedido.data_criacao)}</PedidoData>
//             </PedidoHeader>
//             <PedidoTexto>{pedido.pedido_oracao}</PedidoTexto>
//             <PedidoActions>
//               <ActionButton 
//                 onClick={() => orandoPeloPedido(pedido.id)} 
                
//                 title="Interceder por este pedido"
//               >
//                 <FaPrayingHands />Intercedentes ({pedido.interacoes})
//               </ActionButton>
//               {/* <ActionButton 
//                 onClick={() => handleComentariosClick(pedido.id)} 
//                 title="Ver ou adicionar comentários"
//               >
//                 <FaCommentDots /> Comentários ({pedido.comentarios ? pedido.comentarios.length : 0})
//               </ActionButton> */}
//             </PedidoActions>
//             {/* {pedido.comentarios && pedido.comentarios.length > 0 && (
//               <CommentsSection>
//                 {pedido.comentarios.map((comentario: { id: React.Key | null | undefined; autor: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; data: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; texto: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
//                   <CommentCard key={comentario.id}>
//                     <CommentHeader>
//                       <span>{comentario.autor}</span>
//                       <span>{comentario.data}</span>
//                     </CommentHeader>
//                     <CommentText>{comentario.texto}</CommentText>
//                   </CommentCard>
//                 ))}
//               </CommentsSection>
//             )} */}
//           </PedidoCard>
//         ))}
//       </PedidosGrid>
//     </PageContainer>
//   );
// };

// export default MuralPiedadePage;