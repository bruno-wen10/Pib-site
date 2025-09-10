import { MinisteriosData } from "@/types/ministerios";
import axios from "axios";



const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const fetchMinisteriosList = async (): Promise<MinisteriosData> => {
	try {
        const response = await axios.get(`${BASE_URL}/ministerios`)
        const data = response.data
        console.log("Dados de ministérios:", data);
        return data
    } catch (error) {
        console.error("Erro ao buscar Ministérios:", error);

        // Trata diferentes tipos de erros
    if (axios.isAxiosError(error)) {

      // Erro de resposta da API
      if (error.response) {
        console.error('Erro de requisição:', error.response.status, error.response.data);
        throw new Error(`Erro na API: ${error.response.status}`);
      } else if (error.request) {

        // Erro sem resposta (ex: rede)
        console.error('Erro de rede:', error.message);
        throw new Error('Erro de rede. Verifique sua conexão.');
      }
    }
      // Outros erros
    throw new Error('Ocorreu um erro inesperado.');
        
    }
}
    