// components/IntercessaoButton.tsx
import React, { useState } from 'react';
import { FaPrayingHands } from 'react-icons/fa';
import { ActionButton } from './MuralOracaoPage-Styled';

interface IntercessaoButtonProps {
  pedidoId: string;
  interacoesIniciais: number;
  onInterceder: (pedidoId: string, novasInteracoes: number) => Promise<void>;
}

const IntercessaoButton: React.FC<IntercessaoButtonProps> = ({
  pedidoId,
  interacoesIniciais,
  onInterceder
}) => {
  const [interacoes, setInteracoes] = useState(interacoesIniciais);
  const [interagindo, setInteragindo] = useState(false);

  const handleClick = async () => {
    if (interagindo) return;
    
    setInteragindo(true);
    
  
    const novasInteracoes = interacoes + 1;
    setInteracoes(novasInteracoes);
    
    try {
      await onInterceder(pedidoId, novasInteracoes);
    } catch (err) {
      // Se der erro, reverte a atualização
      setInteracoes(interacoes);
      console.error('Erro ao interceder:', err);
    } finally {
      setInteragindo(false);
    }
  };

  return (
    <ActionButton 
      onClick={handleClick} 
      disabled={interagindo}
      title="Interceder por este pedido"
    >
      <FaPrayingHands /> 
      {interagindo ? 'Intercedendo...' : `Intercedentes (${interacoes})`}
    </ActionButton>
  );
};

export default IntercessaoButton;