import { FaArrowLeft, FaCalendarAlt, FaEnvelope, FaHourglassHalf, FaMapMarkerAlt, FaPhotoVideo, FaUserTie } from "react-icons/fa";
import { BackLink, ContentGrid, HeaderSection, InfoItem, MainContent, MediaSection, PhotoGrid, ShortDescription, Sidebar, VideoGrid, MinisterioImage } from "../Ministerios/MinisterioPage-Styled";
import { PageContainer, Title } from "./EventosPage-Styled";
import { useEventos } from "@/hooks/context/use-Eventos"; // Importando o hook de eventos





const EventoPage = ()=>{
    const { evento, isLoading, error } = useEventos(); 
    return (
        
           <PageContainer>
                 <BackLink to={`/eventos`}> 
                   <FaArrowLeft /> Voltar para todos os Ministérios
                 </BackLink>
                 <HeaderSection>
                   <MinisterioImage src={evento?.imagem} alt={`Imagem do Evento ${evento?.descricao}`} />
                   <Title>{evento?.titulo}</Title>
                   <ShortDescription>{evento?.descricao}</ShortDescription>
                 </HeaderSection>

                 <ContentGrid>
                  <MainContent>
                    <h2>Sobre o Evento</h2>
                    <p>{evento?.sobre_evento || 'Mais informações sobre este ministério em breve.'}</p>
                 </MainContent>
                 <Sidebar>
                    <h3>Informações:</h3>
                    {evento?.lideranca_responsavel && (
                    <div>
                        <InfoItem>
                        <FaUserTie /> <strong> Liderança: </strong> 
                      </InfoItem>                    
                        <div>{evento.lideranca_responsavel}</div>
                        <br />
                    </div>
                    )}
                    {
                      evento?.data && (
                        <div>
                           <InfoItem>
                          <FaCalendarAlt /> <strong>Data do Evento:</strong> 
                         </InfoItem>
                         <div>
                          {evento.data}
                         </div>
                         <br />
                        </div>
                      )
                    }
                    {evento?.dataFim && (
                      <div>
                        <InfoItem>
                          <FaHourglassHalf /> <strong>Inscrições até:</strong> 
                        </InfoItem>
                        <div>
                          {evento.dataFim}
                        </div>
                        <br />
                      </div>
                    )}
                    {evento?.local && (
                      <div>
                        <InfoItem>
                          <FaMapMarkerAlt /> <strong>Local:</strong>
                        </InfoItem>
                        <div>
                          {evento.local}
                        </div>
                        <br />
                      </div>
                    )}
                    {evento?.inscricao && (
                      <div>
                        <InfoItem>
                          <FaEnvelope /> <strong>Link de Inscrição:</strong> 
                        </InfoItem>
                        <div>
                          <a href={evento.inscricao} target="_blank" rel="noopener noreferrer">
                            {evento.inscricao}
                          </a>
                        </div>
                        <br />
                      </div>
                    )}
                  </Sidebar>
                 </ContentGrid>
                 {(evento?.fotos && evento.fotos.length > 0) || 
 (evento?.videosYoutube && evento.videosYoutube.length > 0) ? (
  <MediaSection>
    <h2><FaPhotoVideo /> Mídia do Evento</h2>

    {evento.fotos && evento.fotos.length > 0 && (
      <>
        <h3>Fotos</h3>
        <PhotoGrid>
          {evento.fotos.map((foto, index) => (
            <img 
              key={index} 
              src={foto} 
              alt={`Foto ${index + 1} do evento ${evento.titulo}`} 
            />
          ))}
        </PhotoGrid>
      </>
    )}

    {evento.videosYoutube && evento.videosYoutube.length > 0 && (
      <>
        <h3>Vídeos</h3>
        <VideoGrid>
          {evento.videosYoutube.map((videoUrl, index) => (
            <iframe
              key={index}
              src={videoUrl}
              title={`Vídeo ${index + 1} do evento ${evento.titulo}`}
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
}

export default EventoPage;