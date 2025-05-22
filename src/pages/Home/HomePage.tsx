import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaClock,
  FaYoutube,
  FaDonate,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import { CarouselNavButton, ContribuaButton, ContribuaHomeSection, ErrorText, HeroContent, HeroSection, LoadingText, ProgramacaoCard, ProgramacaoGrid, RecentVideosGrid, Section, SectionTitle, VideoPlayerPlaceholder, VideoThumbnailCard, YoutubeSection } from "./HomePage-style";
import {Video} from "../../types/youtube"; // Importando o tipo Video

// Interfaces
interface Evento {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
  destaque?: boolean;
  data?: string; // Adicionado para consistência, mesmo que não usado diretamente no card do hero
}



interface ContribuicaoData {
  pix: {
    chave: string;
    qrCodeUrl: string;
  };
}



const HomePage: React.FC = () => {
  const [heroEvents, setHeroEvents] = useState<Evento[]>([]);
  const [recentVideos, setRecentVideos] = useState<Video[]>([]);
  const [liveVideo, setLiveVideo] = useState<Video | null>(null);
  const [contribData, setContribData] = useState<ContribuicaoData | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [eventosRes, videosRes, contribuicaoRes] = await Promise.all([
          axios.get("http://localhost:3001/eventos?destaque=true&_limit=5"), // Max 5 hero events
          axios.get("http://localhost:3001/videos?_sort=data&_order=desc&_limit=5"), // 4 recents + 1 for live
          axios.get("http://localhost:3001/contribuicao"),
          
        ]);

        setHeroEvents(eventosRes.data);
        
        // Simula um vídeo ao vivo sendo o primeiro da lista de vídeos ou um específico com destaque
        const allVideos = videosRes.data as Video[];
        const live = allVideos.find(v => v.destaque === true) || (allVideos.length > 0 ? allVideos[0] : null);
        setLiveVideo(live);
        setRecentVideos(allVideos.filter(v => v.id !== live?.id).slice(0, 4)); // Pega 4 vídeos recentes que não sejam o ao vivo

        setContribData(contribuicaoRes.data);
        setError(null);
      } catch (err) {
        console.error("Erro ao buscar dados para a Home:", err);
        setError("Não foi possível carregar todas as informações da página inicial.");
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const nextSlide = () => {
    if (heroEvents.length === 0) return;
    setCurrentSlide(currentSlide === heroEvents.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    if (heroEvents.length === 0) return;
    setCurrentSlide(currentSlide === 0 ? heroEvents.length - 1 : currentSlide - 1);
  };

  useEffect(() => {
    if (heroEvents.length <= 1) return; // No auto-slide if 0 or 1 event
    const timer = setTimeout(() => {
      nextSlide();
    }, 7000);
    return () => clearTimeout(timer);
  }, [currentSlide, heroEvents]);

  if (loading) {
    return <LoadingText>Carregando página inicial...</LoadingText>;
  }

  if (error) {
    return <ErrorText>{error}</ErrorText>;
  }

  return (
    <>
      {heroEvents.length > 0 && (
        <HeroSection style={{ backgroundImage: `url(${heroEvents[currentSlide].imagem})` }}>
          {heroEvents.length > 1 && (
            <>
              <CarouselNavButton className="prev" onClick={prevSlide} aria-label="Slide Anterior">
                <FaChevronLeft />
              </CarouselNavButton>
              <CarouselNavButton className="next" onClick={nextSlide} aria-label="Próximo Slide">
                <FaChevronRight />
              </CarouselNavButton>
            </>
          )}
          <HeroContent>
            <h1>{heroEvents[currentSlide].titulo}</h1>
            <p>{heroEvents[currentSlide].descricao}</p>
            <ContribuaButton as={Link} to="/eventos">Ver Eventos</ContribuaButton>
          </HeroContent>
        </HeroSection>
      )}

      <Section>
        <SectionTitle>Confira Nossa Programação</SectionTitle>
        <ProgramacaoGrid>
          <ProgramacaoCard to="/eventos">
            <FaCalendarAlt />
            <h3>Eventos</h3>
            <p>Veja os próximos eventos e conferências.</p>
          </ProgramacaoCard>
          <ProgramacaoCard to="/cultos">
            <FaClock />
            <h3>Horários dos Cultos</h3>
            <p>Participe de nossos cultos semanais.</p>
          </ProgramacaoCard>
        </ProgramacaoGrid>
      </Section>

      <Section>
        <SectionTitle>Cultos Ao Vivo e Recentes</SectionTitle>
        <YoutubeSection>
          <VideoPlayerPlaceholder>
            {liveVideo ? (
              <iframe width="560" height="315" src="https://www.youtube.com/embed/7clLRGKd1q0?si=sBOg_9rZ4CQYEWDH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              // <iframe
              //   src={liveVideo.url.replace("watch?v=", "embed/")} // Adapta URL para embed
              //   title={liveVideo.titulo}
              //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              //   allowFullScreen
              //   style={{ width: "100%", height: "100%", border: "none" }}
              // ></iframe>
            ) : (
              <p><FaYoutube style={{ fontSize: "4rem", marginRight: "10px" }} /> Nenhum vídeo ao vivo no momento.</p>
            )}
          </VideoPlayerPlaceholder>
          <h4>Últimas Transmissões e Vídeos</h4>
          {recentVideos.length > 0 ? (
            <RecentVideosGrid>
              {recentVideos.map((video) => (
                <VideoThumbnailCard key={video.id} href={video.url} target="_blank" rel="noopener noreferrer">
                  <img src={video.thumbnail} alt={video.titulo} />
                  <h4>{video.titulo}</h4>
                </VideoThumbnailCard>
              ))}
            </RecentVideosGrid>
          ) : (
            <p>Nenhum vídeo recente encontrado.</p>
          )}
        </YoutubeSection>
      </Section>

      {contribData && (
        <Section>
          <SectionTitle>Contribua com a Obra</SectionTitle>
          <ContribuaHomeSection>
            <p>
              Sua oferta e dízimo são importantes para a manutenção da casa de Deus e para o avanço do Reino.
              Agradecemos sua generosidade!
            </p>
            <img src={contribData.pix.qrCodeUrl} alt="QR Code para Contribuição" />
            <p><strong>PIX (Chave):</strong> {contribData.pix.chave}</p>
            <ContribuaButton to="/contribua">
              <FaDonate /> Ver Todas as Formas de Contribuir
            </ContribuaButton>
          </ContribuaHomeSection>
        </Section>
      )}
    </>
  );
};

export default HomePage;

