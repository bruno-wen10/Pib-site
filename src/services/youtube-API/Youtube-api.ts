import axios from "axios";
import { YouTubeSearchResponse } from "@/types/youtube";



const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;
const BASE_URL = "https://www.googleapis.com/youtube/v3";

const youtubeApi = axios.create({
    baseURL: BASE_URL,
    params: {
        key: API_KEY,
        channelId: CHANNEL_ID,
        part: "snippet"
    },
})
// Função para qiue rastreia Lives ao vivos acontecendo no canal 
export const fetchLiveVideos = async (): Promise<YouTubeSearchResponse> => {
    try{
        const response = await youtubeApi.get(
           "/search", {
             params: {
                eventType: "live", 
                type: "video", 
             }
           }
        )
        const data = response.data;
        console.log(data);
        return data;
    } catch (error) {
        console.error("Erro ao buscar vídeos do canal:", error);
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.error?.message || 'Failed to fetch live videos');
        }
        throw new Error('Failed to fetch live videos');
    }
}

// Função para buscar vídeos recentes do canal
export const fetchRecentVideos = async (): Promise<YouTubeSearchResponse> => {
    try{
        const response = await youtubeApi.get(
            "/search", {
                params: {
                    maxResults: 3,
                    order: "date",
                    type: "video",
                }
            }
        )
        const data = response.data;
        console.log(data);
        return data;
    } catch (error) {
        console.error("Erro ao buscar vídeos do canal:", error);
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.error?.message || 'Failed to fetch recent videos');
        }
        throw new Error('Failed to fetch recent videos');
    }
}