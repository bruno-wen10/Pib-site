import { createContext, useContext, useState, ReactNode, useCallback } from "react";
import { Evento } from "@/types/events";
import { fetchEventoById } from '@/services/Eventos-API/eventos-API'; // correção final.


type EventosContextType = {
  evento: Evento | null;
  isLoading: boolean;
  error: string | null;
  carregarEvento: (id: string) => Promise<void>;
};

const EventosContext = createContext<EventosContextType | undefined>(undefined);

export const EventosProvider = ({ children }: { children: ReactNode }) => {
  const [evento, setEvento] = useState<Evento | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const carregarEvento = useCallback(async (id: string) => {
    if (!id) {
      setError("ID do evento não fornecido");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      const dados = await fetchEventoById(id);
      setEvento(dados);
    } catch (err) {
      setError((err as Error).message);
      setEvento(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <EventosContext.Provider value={{ evento, isLoading, error, carregarEvento }}>
      {children}
    </EventosContext.Provider>
  );
};

export const useEventos = () => {
  const context = useContext(EventosContext);
  if (!context) {
    throw new Error("useEventos deve ser usado dentro de um <EventosProvider>");
  }
  return context;
};


