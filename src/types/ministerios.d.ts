export interface MinisterioFoto {
  id: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface Ministerio {
  id: string;
  nome_ministerio: string;
  slug: string;
  lideranca_responsavel?: string;
  funcoes_ministerio?: string; // backend manda como string, não array
  descricao_ministerio?: string;
  sobre_ministerio?: string;
  imagem_banner?: string;
  logo_ministerio?: string;
  contato_email?: string;
  contato_telefone?: string;
  encontros?: string;
  redes_sociais?: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  fotos: MinisterioFoto[];
}

export type MinisteriosData = Ministerio[];

