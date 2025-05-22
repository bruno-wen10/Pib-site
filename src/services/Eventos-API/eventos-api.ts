import axios from "axios";
import { Eventos } from "../../types/events";



export const fetchEventos = async (): Promise<Eventos[] | null> => {
  try {
    const response = await axios.get("http://localhost:3001/api/eventos");

    if (!response.data || !Array.isArray(response.data.eventos)) {  
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    return response.data.eventos as Eventos[];
  } catch (error) {
    console.error("Erro ao buscar eventos:", error);
    return null;
  }
};