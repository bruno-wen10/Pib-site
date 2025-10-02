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
  id: string;
  nome_evento: string;
  descricao?: string | null;
  imagemEvento?: string | null;
  destaque?: boolean;
  dataInicio_evento?: string | null;
  dataFim_evento?: string | null;
}

interface ContribuicaoData {
  pix: {
    chave: string;
    qrCodeUrl: string;
  };
  contaBancaria?: {
    banco: string;
    agencia: string;
    conta: string;
    titular: string;
    cnpj: string;
  };
  contato?: {
    telefone: string;
    whatsapp: string;
    email: string;
  };
}

const HomePage = () => {
  const [heroEvents, setHeroEvents] = useState<Evento[]>([]);
  const [contribData, setContribData] = useState<ContribuicaoData | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { live, videosRecentes } = useYoutube();

  // 🔹 Dados locais de contribuição
  const contribuicao: ContribuicaoData[] = [
    {
      pix: {
        chave: "45.310.554/0001-23",
        qrCodeUrl: "./src/assets/QRcode.png",
      },
      contaBancaria: {
        banco: "Banco do Itaú",
        agencia: "0000",
        conta: "00000-0",
        titular: "Primeira Igreja Batista Em Franca/SP",
        cnpj: "45.310.554/0001-23",
      },
      contato: {
        telefone: "(16) 3403-4383",
        whatsapp: "1634034383",
        email: "pibfranca@pibfranca.org.br",
      },
    },
  ];
  const BASE_URL = import.meta.env.VITE_API_URL  || "http://localhost:3000";
  // 🔹 Carrega dados de eventos (continua pela API) + contribuição local
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const eventosRes = await axios.get<Evento[]>(
          `${BASE_URL}/eventos`
        );
        // filtra só os que têm destaque = true
      //const eventosDestaque = eventosRes.data.filter((e) => e.destaque);

        setHeroEvents(eventosRes.data.slice(0, 5)); // pega os primeiros 5 eventos
        setContribData(contribuicao[0]); // usa os dados locais
        setError(null);
      } catch (err) {
        console.error("Erro ao buscar eventos:", err);
        setError("Não foi possível carregar todas as informações da página inicial.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Funções de navegação no carrossel
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

  // Auto-slide
  useEffect(() => {
    if (heroEvents.length <= 1) return;
    const timer = setTimeout(() => {
      nextSlide();
    }, 7000);
    return () => clearTimeout(timer);
  }, [currentSlide, heroEvents]);

  // Estado da página
  if (loading) {
    return <LoadingText>Carregando página inicial...</LoadingText>;
  }

  if (error) {
    return <ErrorText>{error}</ErrorText>;
  }

  const liveVideo = live?.items?.[0]?.id?.videoId;

  return (
    <>
      {heroEvents.length > 0 && (
        <HeroSection
          style={{
    backgroundImage: `url(${heroEvents[currentSlide].imagemEvento})`,
  }}
        >
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
          <HeroContent>
    <h1>{heroEvents[currentSlide].nome_evento}</h1>
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
