

export type Eventos = {
  id: string;
  titulo: string;
  data: string;
  local: string;
  descricao: string;
  imagem: string;
  destaque: boolean;
  dataInicio: string; // formato ISO: "YYYY-MM-DD"
  dataFim: string;    // formato ISO: "YYYY-MM-DD"
};