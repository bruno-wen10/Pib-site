import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Eventos } from "@/types/events"; // Importando o tipo Evento
import { fetchEventos } from "@/services/Eventos-API/eventos-api";

// Tipo do evento

// Tipo do contexto
type EventosContextType = {
  eventos: Eventos[] | null;
  carregando: boolean;
  erro: string | null;
};

// Criando o contexto
const EventosContext = createContext<EventosContextType | undefined>(undefined);



// Provider
export const EventosProvider = ({ children }: { children: ReactNode }) => {
  const [eventos, setEventos] = useState<Eventos[] | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    const carregar = async () => {
      try {
        const dados = await fetchEventos();
        setEventos(dados);
      } catch (err) {
        setErro((err as Error).message);
      } finally {
        setCarregando(false);
      }
    };

    carregar();
  }, []);

  return (
    <EventosContext.Provider value={{ eventos, carregando, erro }}>
      {children}
    </EventosContext.Provider>
  );
};

// Hook para usar o contexto
export const useEventos = () => {
  const context = useContext(EventosContext);
  if (context === undefined) {
    throw new Error("useEventos deve ser usado dentro de um <EventosProvider>");
  }
  return context;
};
