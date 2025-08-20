import axios from "axios";
import { Eventos } from "../../types/events";



export const fetchEventos = async(id: string):Promise<Eventos> =>{
  if (!id) {
      throw new Error('ID não fornecido');
  }
  try {
      const response = await axios.get(`http://localhost:3001/eventos?id=${id}`)
        if(response.data && response.data.length >0){
            return response.data[0]
        } else{
            throw new Error('Evento não encontrado');
        }
    } catch (error) {
        throw new Error('Erro ao buscar Evento');
    }






}