import React, { useEffect, useState } from 'react';
import { theme } from '../../styles/theme';
import { FaClock, FaMapMarkerAlt, FaVideo } from 'react-icons/fa';
import { CultoCard, CultoDescricao, CultoDia, CultoHorario, CultoIcon, CultoLink, CultosGrid,  HeaderSection, LoadingText, PageContainer, Subtitle, Title } from './CultosPageStyled';

// Interface para tipagem dos dados do culto
interface HorarioCulto {
  hora: string;
  descricao: string;
}

interface Culto {
  id: number;
  dia: string;
  horarios: HorarioCulto[];
  onlineLink?: string;
  local: string;
}



const CultosPage: React.FC = () => {
  const [cultos, setCultos] = useState<Culto[]>([]);
 
  const linkCultoAoVivo = 'https://www.youtube.com/@PIBFranca'
  // Dados dos cultos (mock)
  const cultosArray: Culto[] = [
    {
      id: 1,
      dia: "Domingo",
      horarios: [
        { hora: "09:00", descricao: "Culto de Celebração Matutino l" },
        { hora: "10:20", descricao: "Escola Bíblica Dominica" },
        { hora: "19:00", descricao: "Culto de Adoração" }
      ],
      onlineLink: `${linkCultoAoVivo}/`,
      local: "Templo Principal - Rua Jose de Alencar, 2601 - Estação, Franca-SP"
    },
    {
      id: 2,
      dia: "Quarta-feira",
      horarios: [
        { hora: "20:00", descricao: "Culto de Oração" }
      ],
      local: "Templo Principal - Rua Jose de Alencar, 2601 - Estação, Franca-SP"
    },
    {
      id: 3,
      dia: "Sexta-feira ou sábado",
      horarios: [
        { hora: "20:00", descricao: "Pequenos Grupos" }
      ],
      local: "Procure um PG para participar - Informações com os líderes"
    }
  ];

  useEffect(() => {
    setCultos(cultosArray);
  }, []);

  


  return (
    <PageContainer>
      <HeaderSection>
        <Title>Nossos Cultos</Title>
        <Subtitle>
          Participe conosco dos nossos momentos de adoração, aprendizado da Palavra e comunhão. 
          Confira nossos horários e programações.
        </Subtitle>
      </HeaderSection>

      {cultos.length === 0 && (
        <LoadingText>Nenhum horário de culto encontrado.</LoadingText>
      )}
      <CultosGrid>
        {cultos.map((culto, index) => (
          <CultoCard key={culto.id} style={{ '--card-index': index } as React.CSSProperties}>
            <CultoIcon><FaClock /></CultoIcon>
            <CultoDia>{culto.dia}</CultoDia>
            {culto.horarios.map(h => (
                <div key={`${culto.id}-${h.hora}`} style={{marginBottom: theme.spacings.small}}>
                    <CultoHorario>{h.hora}</CultoHorario>
                    <CultoDescricao>{h.descricao}</CultoDescricao>
                </div>
            ))}
            {culto.onlineLink && (
              <CultoLink href={culto.onlineLink} target="_blank" rel="noopener noreferrer">
                <FaVideo /> Assistir Online
              </CultoLink>
            )}
            <CultoDescricao style={{marginTop: theme.spacings.medium}}>
                <FaMapMarkerAlt style={{marginRight: '5px'}}/> Local: {culto.local}
            </CultoDescricao>
          </CultoCard>
        ))}
      </CultosGrid>
    </PageContainer>
  );
};

export default CultosPage;

