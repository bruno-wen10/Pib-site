import axios from 'axios';
import { PedidoPiedade, Comentario } from '../../types/mural-oracao';

// Configuração base do axios com variável de ambiente
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para tratamento global de erros
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Erro na requisição:', error);
    if (error.response) {
      // Erro da API com status code
      throw new Error(`Erro ${error.response.status}: ${error.response.data.message || 'Erro na requisição'}`);
    } else if (error.request) {
      // Erro de rede
      throw new Error('Erro de conexão. Verifique sua internet e tente novamente.');
    } else {
      // Outros erros
      throw new Error('Erro inesperado. Tente novamente.');
    }
  }
);

// Serviços do Mural da Piedade
export const muralPiedadeService = {
  // Buscar todos os pedidos
  async getPedidos(): Promise<PedidoPiedade[]> {
    try {
      const response = await api.get('/muralPiedade?_sort=id&_order=desc');
      return response.data;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Falha ao carregar os pedidos de oração';
      throw new Error(errorMessage);
    }
  },

  // Atualizar interações de um pedido
  async updateInteracoes(pedidoId: number, novasInteracoes: number): Promise<void> {
    try {
      await api.patch(`/muralPiedade/${pedidoId}`, { 
        interacoes: novasInteracoes 
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Falha ao registrar interação';
      throw new Error(errorMessage);
    }
  },

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
  async addPedido(novoPedido: Omit<PedidoPiedade, 'id' | 'comentarios'> & { comentarios?: Comentario[] }): Promise<PedidoPiedade> {
    try {
      const response = await api.post('/muralPiedade', {
        ...novoPedido,
        interacoes: novoPedido.interacoes || 0,
        comentarios: novoPedido.comentarios || []
      });
      return response.data;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Falha ao adicionar pedido';
      throw new Error(errorMessage);
    }
  },

  // Adicionar comentário
  async addComentario(pedidoId: number, comentario: Omit<Comentario, 'id'>): Promise<Comentario> {
    try {
      // Primeiro busca o pedido atual
      const pedido = await this.getPedidoById(pedidoId);
      
      // Cria o novo comentário com ID temporário
      const novoComentario: Comentario = {
        ...comentario,
        id: Date.now() // ID temporário (será substituído pelo json-server)
      };

      // Atualiza o pedido com o novo comentário
      const pedidoAtualizado = {
        ...pedido,
        comentarios: [...pedido.comentarios, novoComentario]
      };

      // const response = await api.put(`/muralPiedade/${pedidoId}`, pedidoAtualizado);
      await api.put(`/muralPiedade/${pedidoId}`, pedidoAtualizado);
      return novoComentario;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Falha ao adicionar comentário';
      throw new Error(errorMessage);
    }
  },

  // Deletar pedido
  async deletePedido(pedidoId: number): Promise<void> {
    try {
      await api.delete(`/muralPiedade/${pedidoId}`);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Falha ao deletar pedido';
      throw new Error(errorMessage);
    }
  }
};

export default api;