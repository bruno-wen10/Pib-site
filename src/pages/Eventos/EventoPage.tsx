import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaArrowLeft, FaCalendarAlt, FaEnvelope, FaHourglassHalf, FaMapMarkerAlt, FaPhotoVideo, FaUserTie } from "react-icons/fa";
import { BackLink, ContentGrid, HeaderSection, InfoItem, MainContent, MediaSection, PhotoGrid, ShortDescription, Sidebar, VideoGrid, MinisterioImage } from "../Ministerios/MinisterioPage-Styled";
import { PageContainer, Title } from "./EventosPage-Styled";
import { useEventos } from "@/hooks/context/use-Eventos";

const EventoPage = () => {
    const { id } = useParams<{ id: string }>();
    const { evento, isLoading, error, carregarEvento } = useEventos();

    useEffect(() => {
        if (id) {
            carregarEvento(id);
        }
    }, [id]);

    if (isLoading) {
        return <PageContainer><p>Carregando evento...</p></PageContainer>;
    }

    if (error) {
        return <PageContainer><p>Erro: {error}</p></PageContainer>;
    }

    if (!evento) {
        return <PageContainer><p>Evento não encontrado.</p></PageContainer>;
    }

    return (
        <PageContainer>
            <BackLink to={`/eventos`}>
                <FaArrowLeft /> Voltar para todos os Eventos
            </BackLink>
            <HeaderSection>
                <MinisterioImage src={evento.imagemEvento} alt={`Imagem do Evento ${evento.descricao}`} />
                <Title>{evento.nome_evento}</Title>
                <ShortDescription>{evento.descricao}</ShortDescription>
            </HeaderSection>

            <ContentGrid>
                <MainContent>
                    <h2>Sobre o Evento</h2>
                    <p>{evento.sobre_evento || 'Mais informações sobre este evento em breve.'}</p>
                </MainContent>
                <Sidebar>
                    <h3>Informações:</h3>
                    {evento.lideranca_responsavel && (
                        <div>
                            <InfoItem>
                                <FaUserTie /> <strong> Liderança: </strong>
                            </InfoItem>
                            <div>{evento.lideranca_responsavel}</div>
                            <br />
                        </div>
                    )}
                    {
                        evento.dataInicio_evento && (
                            <div>
                                <InfoItem>
                                    <FaCalendarAlt /> <strong>Data do Evento:</strong>
                                </InfoItem>
                                <div>
                                    {evento.dataInicio_evento}
                                </div>
                                <br />
                            </div>
                        )
                    }
                    {evento.data_fim_inscricao && (
                        <div>
                            <InfoItem>
                                <FaHourglassHalf /> <strong>Inscrições até:</strong>
                            </InfoItem>
                            <div>
                                {evento.data_fim_inscricao}
                            </div>
                            <br />
                        </div>
                    )}
                    {evento.local && (
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
                    {evento.inscricao && (
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
            {(evento.fotos && evento.fotos.length > 0) || (evento.videos && evento.videos.length > 0) ? (
                <MediaSection>
                    <h2><FaPhotoVideo /> Mídia do Evento</h2>

                    {evento.fotos && evento.fotos.length > 0 && (
                        <>
                            <h3>Fotos</h3>
                            <PhotoGrid>
                                {evento.fotos.map((foto, index) => (
                                    <img
                                        key={index}
                                        src={foto.url}
                                        alt={`Foto ${index + 1} do evento ${evento.nome_evento}`}
                                    />
                                ))}
                            </PhotoGrid>
                        </>
                    )}

                    {evento.videos && evento.videos.length > 0 && (
                        <>
                            <h3>Vídeos</h3>
                            <VideoGrid>
                                {evento.videos.map((videoUrl, index) => (
                                    <iframe
                                        key={index}
                                        src={videoUrl}
                                        title={`Vídeo ${index + 1} do evento ${evento.nome_evento}`}
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

export default EventoPage;


