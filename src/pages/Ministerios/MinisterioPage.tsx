import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import { theme } from '../../styles/theme';
import { FaArrowLeft, FaUserTie, FaEnvelope, FaCalendarAlt, FaPhotoVideo, FaYoutube } from 'react-icons/fa';

// Interface para os dados do Ministério
interface MinisterioDetalhado {
  id: number;
  nome: string;
  slug: string;
  imagem: string;
  descricaoCurta: string;
  descricaoCompleta: string;
  lideranca?: string;
  contato?: string;
  horarioEncontros?: string;
  fotos?: string[];
  videosYoutube?: string[];
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageContainer = styled.div`
  padding: ${theme.spacings.large} ${theme.spacings.medium};
  animation: ${fadeIn} 0.8s ease-out;
  max-width: 1000px;
  margin: 0 auto;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${theme.colors.primary};
  font-weight: 600;
  text-decoration: none;
  margin-bottom: ${theme.spacings.medium};
  font-size: ${theme.fontSizes.medium};
  transition: color 0.3s ease;

  svg {
    margin-right: ${theme.spacings.xsmall};
  }

  &:hover {
    color: ${theme.colors.secondary};
  }
`;

const HeaderSection = styled.header`
  text-align: center;
  margin-bottom: ${theme.spacings.large};
  padding-bottom: ${theme.spacings.medium};
  border-bottom: 1px solid ${theme.colors.lightGray};
`;

const MinisterioImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: ${theme.spacings.medium};
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

const Title = styled.h1`
  font-size: 2.8rem; // Slightly larger for individual page
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.heading};
  margin-bottom: ${theme.spacings.small};
`;

const ShortDescription = styled.p`
  font-size: ${theme.fontSizes.large};
  color: ${theme.colors.text};
  max-width: 800px;
  margin: 0 auto ${theme.spacings.medium} auto;
  line-height: 1.7;
  font-style: italic;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacings.large};
  margin-top: ${theme.spacings.medium};

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 2fr 1fr; // Main content and sidebar
  }
`;

const MainContent = styled.article`
  h2 {
    font-size: ${theme.fontSizes.xlarge};
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.heading};
    margin-top: ${theme.spacings.medium};
    margin-bottom: ${theme.spacings.small};
    border-bottom: 2px solid ${theme.colors.secondary};
    padding-bottom: ${theme.spacings.xsmall};
    display: inline-block;
  }
  p {
    font-size: ${theme.fontSizes.medium};
    color: ${theme.colors.text};
    line-height: 1.8;
    margin-bottom: ${theme.spacings.medium};
    white-space: pre-wrap; // Preserve line breaks from description
  }
`;

const Sidebar = styled.aside`
  background-color: ${theme.colors.white};
  padding: ${theme.spacings.medium};
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  align-self: flex-start; // Stick to top

  h3 {
    font-size: ${theme.fontSizes.large};
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.heading};
    margin-bottom: ${theme.spacings.medium};
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacings.small};
  svg {
    color: ${theme.colors.secondary};
    margin-right: ${theme.spacings.small};
    font-size: 1.2em;
    min-width: 20px; // Ensure icon alignment
  }
`;

const MediaSection = styled.section`
  margin-top: ${theme.spacings.large};
  h2 {
    text-align: center;
  }
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacings.medium};
  margin-bottom: ${theme.spacings.large};

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.05);
    }
  }
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacings.medium};

  iframe {
    width: 100%;
    height: 200px;
    border-radius: 6px;
    border: none;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
`;

const LoadingText = styled.p`
  text-align: center;
  font-size: ${theme.fontSizes.large};
  color: ${theme.colors.primary};
  padding: ${theme.spacings.xlarge};
`;

const ErrorText = styled.p`
  text-align: center;
  font-size: ${theme.fontSizes.large};
  color: red;
  padding: ${theme.spacings.xlarge};
`;

const MinisterioPage: React.FC = () => {
  const { ministerioSlug } = useParams<{ ministerioSlug: string }>();
  const [ministerio, setMinisterio] = useState<MinisterioDetalhado | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMinisterio = async () => {
      if (!ministerioSlug) return;
      try {
        // Busca pelo slug, já que é mais amigável para URL
        const response = await axios.get(`http://localhost:3001/ministerios?slug=${ministerioSlug}`);
        if (response.data && response.data.length > 0) {
          setMinisterio(response.data[0]);
        } else {
          setError('Ministério não encontrado.');
        }
      } catch (err) {
        setError('Falha ao carregar os dados do ministério.');
        console.error('Erro ao buscar ministério:', err);
      }
      setLoading(false);
    };

    fetchMinisterio();
  }, [ministerioSlug]);

  if (loading) {
    return <LoadingText>Carregando informações do ministério...</LoadingText>;
  }

  if (error || !ministerio) {
    return <ErrorText>{error || 'Ministério não encontrado.'}</ErrorText>;
  }

  return (
    <PageContainer>
      <BackLink to="/ministerios">
        <FaArrowLeft /> Voltar para todos os Ministérios
      </BackLink>
      <HeaderSection>
        <MinisterioImage src={ministerio.imagem} alt={`Imagem do Ministério ${ministerio.nome}`} />
        <Title>{ministerio.nome}</Title>
        <ShortDescription>{ministerio.descricaoCurta}</ShortDescription>
      </HeaderSection>

      <ContentGrid>
        <MainContent>
          <h2>Sobre o Ministério</h2>
          <p>{ministerio.descricaoCompleta || 'Mais informações sobre este ministério em breve.'}</p>
        </MainContent>
        <Sidebar>
          <h3>Informações</h3>
          {ministerio.lideranca && (
            <InfoItem><FaUserTie /> <strong>Liderança:</strong> {ministerio.lideranca}</InfoItem>
          )}
          {ministerio.contato && (
            <InfoItem><FaEnvelope /> <strong>Contato:</strong> {ministerio.contato}</InfoItem>
          )}
          {ministerio.horarioEncontros && (
            <InfoItem><FaCalendarAlt /> <strong>Encontros:</strong> {ministerio.horarioEncontros}</InfoItem>
          )}
        </Sidebar>
      </ContentGrid>

      {(ministerio.fotos && ministerio.fotos.length > 0) || (ministerio.videosYoutube && ministerio.videosYoutube.length > 0) ? (
        <MediaSection>
          <h2><FaPhotoVideo /> Mídia do Ministério</h2>
          {ministerio.fotos && ministerio.fotos.length > 0 && (
            <>
              <h3>Fotos</h3>
              <PhotoGrid>
                {ministerio.fotos.map((foto, index) => (
                  <img key={index} src={foto} alt={`Foto ${index + 1} do Ministério ${ministerio.nome}`} />
                ))}
              </PhotoGrid>
            </>
          )}
          {ministerio.videosYoutube && ministerio.videosYoutube.length > 0 && (
            <>
              <h3>Vídeos</h3>
              <VideoGrid>
                {ministerio.videosYoutube.map((videoUrl, index) => (
                  <iframe
                    key={index}
                    src={videoUrl.replace("watch?v=", "embed/")}
                    title={`Vídeo ${index + 1} do Ministério ${ministerio.nome}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ))}
              </VideoGrid>
            </>
          )}
        </MediaSection>
      ) : null}
    </PageContainer>
  );
};

// Este arquivo deve ser salvo como src/pages/Ministerios/MinisterioPage.tsx
// E as rotas em App.tsx devem ser atualizadas para incluir /ministerios/:ministerioSlug
export default MinisterioPage;

