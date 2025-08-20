import React from 'react';
import {useMinisterio} from'../../hooks/context/use-Ministerio-Page'

import { FaArrowLeft, FaUserTie, FaEnvelope, FaCalendarAlt, FaPhotoVideo } from 'react-icons/fa';
import { ErrorText, LoadingText, PageContainer } from './MinisterioListPage';
import { BackLink, ContentGrid, HeaderSection, InfoItem, MainContent, MediaSection, MinisterioImage, PhotoGrid, ShortDescription, Sidebar, Title, VideoGrid } from './MinisterioPage-Styled';


const MinisterioPage: React.FC = () => {
  

  const { ministerio, isLoading, error } = useMinisterio();

  if (isLoading) {
    return <LoadingText>Carregando informações do ministério...</LoadingText>;
  }

  if (error || !ministerio) {
    return <ErrorText>{error || 'Ministério não encontrado.'}</ErrorText>;
  }

  return (
    <PageContainer>
      <BackLink to={`/ministerios`}> 
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
            <div>
              <InfoItem><FaUserTie /> <strong>Liderança:</strong>
              </InfoItem>
              <div>{ministerio.lideranca}</div>
              <br />
            </div>
          )}
          {ministerio.contato && (
            <div>
              <InfoItem><FaEnvelope /> <strong>Contato:</strong> 
              </InfoItem>
              <div>{ministerio.contato}</div>
              <br />
            </div>
          )}
          {ministerio.horarioEncontros && (
            <div>
              <InfoItem><FaCalendarAlt /> <strong>Encontros:</strong> 
              </InfoItem>
              <div>{ministerio.horarioEncontros}</div>
              <br />
            </div>
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

