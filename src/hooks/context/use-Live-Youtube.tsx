import {
  fetchtYouTubeLives,
  fetchVideosRecentes,
} from "@/services/youtube-API/Youtube-api-test";
import { YouTubeSearchLives, YouTubeSearchVideos } from "@/types/youtube";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

// Tipagem do contexto
interface YoutubeContextProps {
  live: YouTubeSearchLives | null;
  videosRecentes: YouTubeSearchVideos | null;
  loading: boolean;
}

// Criando o contexto
const YoutubeContext = createContext<YoutubeContextProps | undefined>({
  live: null,
  videosRecentes: null,
  loading: false,
});

// Provider do contexto
export const YouTubeProvider = ({ children }: { children: ReactNode }) => {
  const [live, setLive] = useState<YouTubeSearchLives | null>(null);
  const [videosRecentes, setVideosRecentes] =
    useState<YouTubeSearchVideos | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadingVideos = async () => {
      try {
        setLoading(true);
        const lives = await fetchtYouTubeLives();
        setLive(lives);
        const videosRecentes = await fetchVideosRecentes();
        setVideosRecentes(videosRecentes);
      } catch (error) {
        console.error("Erro ao carregar vídeos", error);
      } finally {
        setLoading(false);
      }
    };
    loadingVideos();
  }, []);

  return(
        <YoutubeContext.Provider value={{live, videosRecentes, loading}}>
          {children}
        </YoutubeContext.Provider>
  )
};

export const useYoutube = () => {
  const context = useContext(YoutubeContext);
  if (context === undefined) {
    throw new Error('useYoutube deve ser usado dentro de um YoutubeProvider');
  }
  return context;
};