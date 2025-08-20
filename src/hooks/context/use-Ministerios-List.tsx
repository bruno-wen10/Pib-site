import { fetchMinisteriosList } from "@/services/Ministerios-API/MinisterioList-API";
import { Ministerio } from "@/types/ministerios";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type MinisterioContextType = {
  ministerios: Ministerio[];
  isLoading: boolean;
  error: string | null;
};

//Crriando o contexto 
const MinisteriosContext = createContext<MinisterioContextType | undefined>({
      ministerios: [],
      isLoading: false,
      error:  null,
});

//Criando o Provaider
export const MinisteriosProvaider = ({children}: {children: ReactNode})=>{
    const [ministerios, setMinisterios] = useState<Ministerio[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadingMinisterios = async () => {
            try {
                setIsLoading(true);
                const ministeriosList = await fetchMinisteriosList();
                setMinisterios(ministeriosList);
            } catch (error) {
                setError("Erro ao carregar ministérios");
            } finally {
                setIsLoading(false);
            }
        };

        loadingMinisterios();
    }, []);

    return (
        <MinisteriosContext.Provider value={{ ministerios, isLoading, error }}>
            {children}
        </MinisteriosContext.Provider>
    )

    
}

export const useMinisterios = () => {
  const context = useContext(MinisteriosContext);
  if (context === undefined) {
    throw new Error('useMinisterios deve ser usado dentro de um MinisterioProvider');
  }
  return context;
};
 