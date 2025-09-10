import { Ministerio } from "@/types/ministerios";
import axios from "axios";




const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const fetchMinisterios = async(slug: string):Promise<Ministerio> =>{

    if (!slug) {
        throw new Error('Slug não fornecido');
    }
    try {
        const response = await axios.get(`${BASE_URL}/ministerios?slug=${slug}`)
        if(response.data && response.data.length >0){
            return response.data[0]
        } else{
            throw new Error('Ministério não encontrado');
        }
    } catch (error) {
        throw new Error('Erro ao buscar Ministério');
    }






}