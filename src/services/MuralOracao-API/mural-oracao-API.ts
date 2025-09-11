import axios from 'axios';
import { PedidoPiedade } from '../../types/mural-oracao';

// Configuração base do axios com variável de ambiente
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});


// Serviços do Mural da Piedade
export const muralPiedadeService = {
  // Buscar todos os pedidos
  async getPedidos(): Promise<PedidoPiedade[]> {
    try {
      const response = await api.get('/mural-oracao');
      return response.data;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Falha ao carregar os pedidos de oração';
      throw new Error(errorMessage);
    }
  },

  async createPedido(novoPedido: Omit<PedidoPiedade, 'id'>): Promise<PedidoPiedade> {
    try {
      const response = await api.post('/mural-oracao', novoPedido);
      return response.data;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Falha ao enviar pedido de oração';
      throw new Error(errorMessage);
    }
  }, 

  async updateOrandoPeloPedido(pedidoId: string, novasInteracoes: number): Promise<void> {
    try {
      const response = await api.put(`/mural-oracao/${pedidoId}`, {
        interacoes: novasInteracoes 
      });
      console.log('Resposta da API ao atualizar interações:', response.data);
      return response.data; 
    } catch (error) {
      
    }
  },


  // Atualizar interações de um pedido
  // async updateInteracoes(pedidoId: string, novasInteracoes: number): Promise<void> {
  //   try {
  //     await api.patch(`/mural-oracao/${pedidoId}`, {
  //       interacoes: novasInteracoes 
  //     });
  //   } catch (error) {
  //     const errorMessage = error instanceof Error ? error.message : 'Falha ao registrar interação';
  //     throw new Error(errorMessage);
  //   }
  // },

  // Buscar um pedido específico
  async getPedidoById(pedidoId: number): Promise<PedidoPiedade> {
    try {
      const response = await api.get(`/muralPiedade/${pedidoId}`);
      return response.data;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Falha ao carregar o pedido';
      throw new Error(errorMessage);
    }
  },

  // Adicionar novo pedido
//  async function addPedido(novoPedido: PedidoPiedade): Promise<PedidoPiedade> {
//   try {
//     const response = await api.post<PedidoPiedade>("/muralPiedade", {
//       ...novoPedido,
//       // interacoes: novoPedido.interacoes || 0,
//       // comentarios: novoPedido.comentarios || []
//     });
//     return response.data;
//   } catch (error: any) {
//     const errorMessage =
//       error?.response?.data?.message ||
//       (error instanceof Error ? error.message : "Falha ao adicionar pedido");
//     throw new Error(errorMessage);
//   }
// }
  // Adicionar comentário
  // async addComentario(pedidoId: number, comentario: Omit<Comentario, 'id'>): Promise<Comentario> {
  //   try {
  //     // Primeiro busca o pedido atual
  //     const pedido = await this.getPedidoById(pedidoId);
      
  //     // Cria o novo comentário com ID temporário
  //     const novoComentario: Comentario = {
  //       ...comentario,
  //       id: Date.now() // ID temporário (será substituído pelo json-server)
  //     };

  //     // Atualiza o pedido com o novo comentário
  //     const pedidoAtualizado = {
  //       ...pedido,
  //       comentarios: [...pedido.comentarios, novoComentario]
  //     };

  //     // const response = await api.put(`/muralPiedade/${pedidoId}`, pedidoAtualizado);
  //     await api.put(`/muralPiedade/${pedidoId}`, pedidoAtualizado);
  //     return novoComentario;
  //   } catch (error) {
  //     const errorMessage = error instanceof Error ? error.message : 'Falha ao adicionar comentário';
  //     throw new Error(errorMessage);
  //   }
  // },

  // // Deletar pedido
  // async deletePedido(pedidoId: number): Promise<void> {
  //   try {
  //     await api.delete(`/muralPiedade/${pedidoId}`);
  //   } catch (error) {
  //     const errorMessage = error instanceof Error ? error.message : 'Falha ao deletar pedido';
  //     throw new Error(errorMessage);
  //   }
  // }
};

export default api;



// Futuras implementações:
// Adicionar novo pedido
  // async addPedido(novoPedido: Omit<PedidoPiedade, 'id' | 'comentarios'> & { comentarios?: Comentario[] }): Promise<PedidoPiedade> {
  //   try {
  //     const response = await api.post('/muralPiedade', {
  //       ...novoPedido,
  //       interacoes: novoPedido.interacoes || 0,
  //       comentarios: novoPedido.comentarios || []
  //     });
  //     return response.data;
  //   } catch (error) {
  //     const errorMessage = error instanceof Error ? error.message : 'Falha ao adicionar pedido';
  //     throw new Error(errorMessage);
  //   }
  // },