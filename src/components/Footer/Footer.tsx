import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { ContactInfoItem, FooterBottom, FooterContainer, FooterContent, FooterSection, LogoFooter, SocialLinks } from './Footer-style';
import LogoIgr from '../../assets/logos/logoPIB.png'

// Interface para os dados do footer (pode vir do db.json)
interface FooterData {
  endereco: string;
  cidadeEstadoCep: string;
  telefone: string;
  email: string;
  redesSociais: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
  };
  copyright: string;
  linksUteis?: Array<{ titulo: string; url: string }>;
  logoUrl?: string;
}



const Footer: React.FC = () => {
  const [footerData, setFooterData] = useState<FooterData | null>(null);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null); // Para tratar erros se necessário

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        

        
        const data: FooterData = {
          endereco: " R. José de Alencar, 2601", // Placeholder
          cidadeEstadoCep: "Estacao, Franca - SP, 14405-208", // Placeholder
          telefone:  "(16) 3403-4383",
          email: "pibfranca@pibfranca.org.br",
          redesSociais: {
            facebook: "https://www.facebook.com/pibfrancaoficial/?locale=pt_BR", // Placeholder
            instagram: "https://www.instagram.com/pibfranca/", // Placeholder
            youtube: "https://www.youtube.com/@PIBFranca" // Placeholder
          },
          copyright: `© ${new Date().getFullYear()} Primeira Igreja Batista. Todos os direitos reservados.`,
          linksUteis: [
            { titulo: "Sobre Nós", url: "/pib" },
            { titulo: "Ministérios", url: "/ministerios" },
            { titulo: "Eventos", url: "/eventos" },
            { titulo: "Política de Privacidade", url: "/politica-de-privacidade" },
          ],
          logoUrl: "/Logotipo PIB.png" // Usar o logo fornecido
        };
        setFooterData(data);

      } catch (err) {
        console.error("Erro ao buscar dados para o footer:", err);
        // setError("Falha ao carregar informações do rodapé.");
        // Fallback para dados mockados em caso de erro
        setFooterData({
          endereco: " R. José de Alencar, 2601", // Placeholder
          cidadeEstadoCep: "Estacao, Franca - SP, 14405-208", // Placeholder
          telefone: "(16) 3403-4383",
          email: "pibfranca@pibfranca.org.br",
          redesSociais: {
            facebook: "#",
            instagram: "#",
            youtube: "#"
          },
          copyright: `© ${new Date().getFullYear()} Nome da Igreja. Todos os direitos reservados.`,
          linksUteis: [
            { titulo: "Sobre Nós", url: "/pib" },
            { titulo: "Ministérios", url: "/ministerios" },
            { titulo: "Eventos", url: "/eventos" },
            { titulo: "Política de Privacidade", url: "/politica-de-privacidade" },
          ],
          logoUrl: LogoIgr, // Usar o logo fornecido
        });
      }
      setLoading(false);
    };

    fetchFooterData();
  }, []);

  if (loading || !footerData) {
    return <FooterContainer><p style={{textAlign: 'center'}}>Carregando rodapé...</p></FooterContainer>; // Ou um spinner
  }

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          
          <h4>Contato</h4>
          <ContactInfoItem>
            <FaMapMarkerAlt />
            <div>
              <p>{footerData.endereco}</p>
              <p>{footerData.cidadeEstadoCep}</p>
            </div>
          </ContactInfoItem>
          <ContactInfoItem>
            <FaPhone />
            <a href={`tel:${footerData.telefone}`}>{footerData.telefone}</a>
          </ContactInfoItem>
          <ContactInfoItem>
            <FaEnvelope />
            <a href={`mailto:${footerData.email}`}>{footerData.email}</a>
          </ContactInfoItem>
        </FooterSection>

        <FooterSection>
          <h4>Links Úteis</h4>
          <ul>
            {footerData.linksUteis?.map(link => (
              <li key={link.titulo}><Link to={link.url}>{link.titulo}</Link></li>
            ))}
             <li><Link to="/cultos">Nossos Cultos</Link></li>
             <li><Link to="/contribua">Contribua</Link></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h4>Conecte-se Conosco</h4>
          <SocialLinks>
            {footerData.redesSociais.facebook && <a href={footerData.redesSociais.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>}
            {footerData.redesSociais.instagram && <a href={footerData.redesSociais.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>}
            {footerData.redesSociais.youtube && <a href={footerData.redesSociais.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>}
          </SocialLinks>
          <p style={{marginTop: theme.spacings.medium}}>Siga-nos nas redes sociais para ficar por dentro das novidades e eventos.</p>
          <LogoFooter src={LogoIgr} alt="Logo da Igreja" />
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <p>{footerData.copyright}</p>
        <p><a href="https://portfolio-bruno-wener-fjax8twhb-brunowen10s-projects.vercel.app/">Desenvolvido por Bruno Wener</a></p>
        {/* Adicionar link para política de privacidade e termos se não estiver nos links úteis */}
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

