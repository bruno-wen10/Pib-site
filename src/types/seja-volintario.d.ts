export interface MinisterioOption {
  id: number;
  nome: string;
  slug: string;
}

export interface FormData {
  nome: string;
  email: string;
  telefone: string;
  ministerio: string;
  mensagem: string;
}