import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Eventos } from "@/types/events";
import { fetchEventos } from "../../services/Eventos-API/eventos-API";
import { useParams } from "react-router-dom";

// Tipo do contexto
type EventosContextType = {
  evento: Eventos | null;
  isLoading: boolean;
  error: string | null;
};

// Criando o contexto
const EventosContext = createContext<EventosContextType | undefined>(undefined);

// Provider
export const EventosProvider = ({ children }: { children: ReactNode }) => {
  const [evento, setEvento] = useState<Eventos | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setErro] = useState<string | null>(null);

  const { id } = useParams<{ id: string }>(); // id sempre vem como string | undefined

  useEffect(() => {
    const carregar = async () => {
      if (!id) { // Garantindo que id exista
        setErro("ID do evento não fornecido");
        setIsLoading(false);
        return;
      }

      try {
        const dados = await fetchEventos(id); 
        setEvento(dados);
      } catch (err) {
        setErro((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    carregar();
  }, [id]);

  return (
    <EventosContext.Provider value={{ evento, isLoading, error }}>
      {children}
    </EventosContext.Provider>
  );
};

// Hook para usar o contexto
export const useEventos = () => {
  const context = useContext(EventosContext);
  if (!context) {
    throw new Error("useEventos deve ser usado dentro de um <EventosProvider>");
  }
  return context;
};
