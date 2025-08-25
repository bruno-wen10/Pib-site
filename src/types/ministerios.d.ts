export interface Ministerio {
 id: number;
  nome: string;
  slug: string;
  funcoes?: { id: number; nome: string, descricao: string }[];
  imagem: string;
  descricaoCurta: string;
  descricaoCompleta: string;
  lideranca?: string;
  contato?: string;
  horarioEncontros?: string;
  fotos?: string[];
  videosYoutube?: string[];
}

export type MinisteriosData = Ministerio[];
