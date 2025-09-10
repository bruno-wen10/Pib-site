import { Evento } from "@/types/events";
import axios from "axios";

export const fetchEventoById = async (id: string): Promise<Evento> => {
  if (!id) {
    throw new Error("ID não fornecido");
  }
  try {
    console.log(`Buscando evento com ID: ${id}`);
    const response = await axios.get(`http://localhost:3000/eventos/${id}`);
    console.log("Dados do evento recebidos:", response.data);
    if (response.data) {
      return response.data;
    } else {
      throw new Error("Evento não encontrado");
    }
  } catch (error) {
    throw new Error("Erro ao buscar Evento");
  }
};


