



// Interface para tipagem dos dados do evento

 export interface Evento {
  id: string;
  nome_evento: string;
  lideranca_responsavel: string;
  inscricao?: string;
  data_inicio_inscricao?: string;
  data_fim_inscricao?: string;
  local: string;
  descricao?: string;
  sobre_evento?: string;
  imagemEvento?: string;
  destaque?: boolean;
  dataInicio_evento?: string;
  dataFim_evento?: string;
  deletedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  fotos?: EventoFoto[];
  videos?: EventoVideo[];
}


