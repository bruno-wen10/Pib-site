import { Ministerio } from "@/types/ministerios";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { fetchMinisterios } from "@/services/Ministerios-API/MinisteriosPages-API";
import { useParams } from "react-router-dom";

interface MinisterioContextType {
  ministerio: Ministerio | null;
  isLoading: boolean;
  error: string | null;
}
const MinisterioContext = createContext<MinisterioContextType | undefined>(undefined);

export const MinisterioProvider = ({children}: {children: ReactNode})=>{ 
    const [ministerio, setMinisterio] = useState<Ministerio | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // pega o slug direto da URL
  const { ministerioSlug } = useParams<{ ministerioSlug: string }>();

    useEffect(()=>{
        if (!ministerioSlug) {
            setError('Slug do ministério não fornecido');
            return;
        }
        const loadingMinisterio = async()=>{
           setIsLoading(true);
           try {
               const ministerioSelecionado=  await fetchMinisterios(ministerioSlug);
               setMinisterio(ministerioSelecionado);
           } catch (error) {
               setError('Erro ao carregar ministério');
           } finally {
               setIsLoading(false);
           }
        }
        loadingMinisterio();
    },[ministerioSlug])
      
     return (
        <MinisterioContext.Provider value={{ministerio, isLoading, error}}>
          {children}
        </MinisterioContext.Provider>
     )

}

export const useMinisterio = () => {
  const context = useContext(MinisterioContext);
  if (context === undefined) {
    throw new Error('useMinisterio deve ser usado dentro de um MinisterioProvider');
  }
  return context;
};

