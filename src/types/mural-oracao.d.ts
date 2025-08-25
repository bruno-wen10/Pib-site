export interface Comentario {
  id: number;
  autor: string;
  data: string;
  texto: string;
}

export interface PedidoPiedade {
  id: number;
  autor: string;
  data: string;
  texto: string;
  interacoes: number;
  comentarios: Comentario[];
}