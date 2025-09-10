import React from 'react';
import {useMinisterio} from'../../hooks/context/use-Ministerio-Page'

import { FaArrowLeft, FaUserTie, FaEnvelope, FaCalendarAlt, FaPhotoVideo } from 'react-icons/fa';
import { ErrorText, LoadingText, PageContainer } from './MinisterioListPage-Styled';
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
        <MinisterioImage src={ministerio.imagem_banner} alt={`Imagem do Ministério ${ministerio.nome_ministerio}`} />
        <Title>{ministerio.nome_ministerio}</Title>
        <ShortDescription>{ministerio.descricao_ministerio}</ShortDescription>
      </HeaderSection>

      <ContentGrid>
        <MainContent>
          <h2>Sobre o Ministério</h2>
          <p>{ministerio.sobre_ministerio || 'Mais informações sobre este ministério em breve.'}</p>
        </MainContent>
        <Sidebar>
          <h3>Informações</h3>
          {ministerio.lideranca_responsavel && (
            <div>
              <InfoItem><FaUserTie /> <strong>Liderança:</strong>
              </InfoItem>
              <div>{ministerio.lideranca_responsavel}</div>
              <br />
            </div>
          )}
          {ministerio.contato_email  && (
            <div>
              <InfoItem><FaEnvelope /> <strong>Contato:</strong> 
              </InfoItem>
              <div>{ministerio.contato_email}</div>
              <br />
            </div>
          )}
          
          {ministerio.encontros && (
            <div>
              <InfoItem><FaCalendarAlt /> <strong>Encontros:</strong> 
              </InfoItem>
              <div>{ministerio.encontros}</div>
              <br />
            </div>
          )}
        </Sidebar>
      </ContentGrid>

      {(ministerio.fotos && ministerio.fotos.length > 0) || null ? (
        //(ministerio.videosYoutube && ministerio.videosYoutube.length > 0)
        <MediaSection>
          <h2><FaPhotoVideo /> Mídia do Ministério</h2>
          {ministerio.fotos && ministerio.fotos.length > 0 && (
            <>
              <h3>Fotos</h3>
              <PhotoGrid>
                {ministerio.fotos.map((foto, index) => (
                  <img key={index} src={foto.url} alt={`Foto ${index + 1} do Ministério ${ministerio.nome_ministerio}`} />
                ))}
              </PhotoGrid>
            </>
          )}
          {/* {ministerio.videosYoutube && ministerio.videosYoutube.length > 0 && (
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
          )} */}
        </MediaSection>
      ) : null}
    </PageContainer>
  );
};

// Este arquivo deve ser salvo como src/pages/Ministerios/MinisterioPage.tsx
// E as rotas em App.tsx devem ser atualizadas para incluir /ministerios/:ministerioSlug
export default MinisterioPage;

