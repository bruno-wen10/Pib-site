import { YouTubeSearchLives, YouTubeSearchVideos } from "@/types/youtube";
import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

const BASE_URL = "https://www.googleapis.com/youtube/v3";

const paramsHttpYoutube = axios.create({
    baseURL: BASE_URL,
    params:{
        key: API_KEY,
        channelId: CHANNEL_ID,
    }
})
export const fetchtYouTubeLives = async ():Promise<YouTubeSearchLives>=>{
    
    try{
        const response = await paramsHttpYoutube.get(
            "/search",
            {
                params:{
                eventType: "live", 
                type: "video", 
                part: "snippet",
                }
            }
        )
        const data = response.data;
        console.log("Dados de transmissões ao vivo:", data);
        return data;
    }catch(error){
        console.error("Erro ao buscar transmissões ao vivo:", error);

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

export const fetchVideosRecentes = async (): Promise<YouTubeSearchVideos> =>{
    
    try {
        const response = await paramsHttpYoutube.get(
            "search",
            {
                params:{
                    maxResults: 3,
                    order: "date",
                    type: "video",
                    part: "snippet",
                }
            }
        )
        return response.data;


    } catch (error) {

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

const testApi = async ()=>{
    try {
        const lives = await fetchtYouTubeLives();
        const videos = await fetchVideosRecentes();

        console.log("Lives:", lives);
        console.log("Recent Videos:", videos);
    } catch (error) {
        
    }
}

testApi()