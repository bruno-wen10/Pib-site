import  { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import Layout from "./components/Layout/Layout";
import CookieBanner from "./components/CookieBanner/CookieBanner";
import {
  HomePage,
  PibPage,
  MinisteriosListPage,
  MinisterioPage, // Rota dinâmica para ministério individual
  EventosPageList,
  EventoPage, // Página de eventos
  InscricoesPage,
  CultosPage,
  MuralPiedadePage,
  NovoPedidoMuralPage,
  ContribuaPage,
  LoginPage,
  RegisterPage,
  NotFoundPage,
  PoliticaDePrivacidadePage
} from "./pages";
import { YouTubeProvider } from "./hooks/context/use-Live-Youtube";
import {  MinisteriosProvaider } from "./hooks/context/use-Ministerios-List";
import { MinisterioProvider } from "./hooks/context/use-Ministerio-Page";
import { EventosProvider } from "./hooks/context/use-Eventos";

function App() {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookie_consent");
    if (!cookieConsent) {
      setShowCookieBanner(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setShowCookieBanner(false);
  };

  const handleRejectCookies = () => {
    localStorage.setItem("cookie_consent", "rejected");
    setShowCookieBanner(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Router>
        <Layout>
          <YouTubeProvider>
          <MinisteriosProvaider>
            <MinisterioProvider>
             <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pib" element={<PibPage />} /> {/* Página PIB Sobre Nós */}
            <Route path="/ministerios" element={<MinisteriosListPage />} />

             {/* Rota dinâmica para a página de um ministério específico */}
            <Route path="/ministerios/:ministerioSlug" element={
              <MinisterioProvider>

                <MinisterioPage />
              </MinisterioProvider>

              } /> 

             {/* Rota dinâmica para a página de um ministério específico */}
            <Route path="/eventos" element={<EventosPageList />} />
            <Route path="/eventos/:id" element={
              <EventosProvider>
                <EventoPage />
              </EventosProvider>
            } />

            <Route path="/inscricoes" element={<InscricoesPage />} />
            <Route path="/cultos" element={<CultosPage />} />
            <Route path="/mural-piedade" element={<MuralPiedadePage />} />
            <Route path="/mural-piedade/novo" element={<NovoPedidoMuralPage />} />
            <Route path="/contribua" element={<ContribuaPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* A rota /access foi solicitada para direcionar para o registro */}
            <Route path="/access" element={<RegisterPage />} /> 
            <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidadePage />} />

            {/* Adicionar uma página de Termos de Uso se necessário, ou link para a política */}
            <Route path="/termos-de-uso" element={<PoliticaDePrivacidadePage />} /> {/* Placeholder, idealmente uma página própria */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          </MinisterioProvider>
          </MinisteriosProvaider>
           
          </YouTubeProvider>
          
          
        </Layout>
        {showCookieBanner && <CookieBanner onAccept={handleAcceptCookies} onReject={handleRejectCookies} />}
      </Router>
    </ThemeProvider>
  );
}

export default App;

