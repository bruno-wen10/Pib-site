import { useEffect, useState } from "react";
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
import {
  CarouselNavButton,
  ContribuaButton,
  ContribuaHomeSection,
  ErrorText,
  HeroContent,
  HeroSection,
  LoadingText,
  ProgramacaoCard,
  ProgramacaoGrid,
  RecentVideosGrid,
  Section,
  SectionTitle,
  VideoPlayerPlaceholder,
  VideoThumbnailCard,
  YoutubeSection,
} from "./HomePage-style";
import { useYoutube } from "@/hooks/context/use-Live-Youtube";
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

const HomePage= () => {
  const [heroEvents, setHeroEvents] = useState<Evento[]>([]);
  const [contribData, setContribData] = useState<ContribuicaoData | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { live, videosRecentes } = useYoutube();

  useEffect(() => {
    alert("⚠️ Atenção!Este site ainda não está finalizado e precisa de alguns ajustes. " +
      "Ele foi postado para que os irmãos da igreja possam acompanhar o nosso avanço. " +
      "O projeto já está quase concluído, mas o banco de dados ainda está sendo criado. " +
      "Por isso, todas as informações exibidas aqui podem conter erros ou estarem incompletas. " +
      "Agradecemos a compreensão de todos.");
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log();
        setLoading(true);
        const [eventosRes, contribuicaoRes] = await Promise.all([
          axios.get("http://localhost:3001/eventos?destaque=true&_limit=5"), // Max 5 hero events
          axios.get("http://localhost:3001/contribuicao"),
        ]);

        setHeroEvents(eventosRes.data);

        

        setContribData(contribuicaoRes.data);
        setError(null);
      } catch (err) {
        console.error("Erro ao buscar dados para a Home:", err);
        setError(
          "Não foi possível carregar todas as informações da página inicial."
        );
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const nextSlide = () => {
    if (heroEvents.length === 0) return;
    setCurrentSlide(
      currentSlide === heroEvents.length - 1 ? 0 : currentSlide + 1
    );
  };

  const prevSlide = () => {
    if (heroEvents.length === 0) return;
    setCurrentSlide(
      currentSlide === 0 ? heroEvents.length - 1 : currentSlide - 1
    );
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
  const liveVideo = live?.items?.[0]?.id?.videoId;
  //const liveVideoTitle = live?.items?.[0]?.snippet?.title;
  return (
    <>
    
      {heroEvents.length > 0 && (
        <HeroSection
          style={{ backgroundImage: `url(${heroEvents[currentSlide].imagem})` }}
        >
          {heroEvents.length > 0 && (
            <>
              <CarouselNavButton
                className="prev"
                onClick={prevSlide}
                aria-label="Slide Anterior"
              >
                <FaChevronLeft />
              </CarouselNavButton>
              <CarouselNavButton
                className="next"
                onClick={nextSlide}
                aria-label="Próximo Slide"
              >
                <FaChevronRight />
              </CarouselNavButton>
            </>
          )}
          <HeroContent>
            <h1>{heroEvents[currentSlide].titulo}</h1>
            <p>{heroEvents[currentSlide].descricao}</p>
            <ContribuaButton as={Link} to="/eventos">
              Ver Eventos
            </ContribuaButton>
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
              <iframe
                 width="100%"
                 height="500"
                 src={`https://www.youtube.com/embed/${liveVideo}?autoplay=1`}
                 title="Transmissão ao Vivo"
                 frameBorder="0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                 allowFullScreen
              ></iframe>
            ) : (
              <p>
                <FaYoutube style={{ fontSize: "4rem", marginRight: "10px" }} />{" "}
                Nenhum vídeo ao vivo no momento.
              </p>
            )}
          </VideoPlayerPlaceholder>
          <h4>Últimas Transmissões e Vídeos</h4>
          {videosRecentes?.items && videosRecentes.items.length > 0 ? (
            <RecentVideosGrid>
              {videosRecentes.items
                .filter((item) => !!item.id.videoId)
                .map((item) => (
                  <VideoThumbnailCard
                    key={item.id.videoId}
                    href={`https://www.youtube.com/watch?v=${item.id.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={
                        item.snippet.thumbnails.medium?.url ||
                        item.snippet.thumbnails.default.url
                      }
                      alt={item.snippet.title}
                    />
                    <h4>{item.snippet.title}</h4>
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
              Sua oferta e dízimo são importantes para a manutenção da casa de
              Deus e para o avanço do Reino. Agradecemos sua generosidade!
            </p>
            <img
              src={contribData.pix.qrCodeUrl}
              alt="QR Code para Contribuição"
            />
            <p>
              <strong>PIX (Chave):</strong> {contribData.pix.chave}
            </p>
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
