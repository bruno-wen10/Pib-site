import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import LogoPib from "../../assets/logos/Logotipo PIB.png"; // Importar o logo da PIB
import {  AuthSection, HeaderContainer, LogoLink, MobileMenuIcon, NavLinksContainer, NavWrapper, StyledNavLink,   } from "./Header-style";

// Simulação de um contexto de autenticação ou estado global
// Em uma aplicação real, isso seria gerenciado por Context API, Redux, Zustand, etc.
// Este hook deve ser movido para um arquivo dedicado (ex: src/hooks/useAuth.ts) e importado aqui.
// const useAuth = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
//   const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser") || "null"));
//   const navigate = useNavigate(); // Para redirecionar após logout

//   const login = (userData: any) => {
//     localStorage.setItem("isLoggedIn", "true");
//     localStorage.setItem("currentUser", JSON.stringify(userData));
//     setIsLoggedIn(true);
//     setCurrentUser(userData);
//   };

//   const logout = () => {
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("currentUser");
//     setIsLoggedIn(false);
//     setCurrentUser(null);
//     navigate("/"); // Redireciona para a home após logout
//   };
  
  // Efeito para atualizar o estado se o localStorage mudar em outra aba/janela
  //useEffect(() => {
  //  const handleStorageChange = () => {
  //    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  //    setCurrentUser(JSON.parse(localStorage.getItem("currentUser") || "null"));
  //  };
  //  window.addEventListener('storage', handleStorageChange);
  //  return () => {
  //    window.removeEventListener('storage', handleStorageChange);
  //  };
  //}, []);


  ///return { isLoggedIn, currentUser, login, logout }; 
//};



const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  //const { isLoggedIn, currentUser, logout } = useAuth();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <NavWrapper>
        <LogoLink to="/" onClick={closeMobileMenu}>
          {/* Logo PIB */}
          <img src={LogoPib} alt="Logo PIB" /> 
        </LogoLink>

        <MobileMenuIcon onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuIcon>

        <NavLinksContainer $isOpen={isMobileMenuOpen}>
          <StyledNavLink to="/" onClick={closeMobileMenu} end>Home</StyledNavLink>
          <StyledNavLink to="/pib" onClick={closeMobileMenu}>PIB</StyledNavLink>
          <StyledNavLink to="/ministerios" onClick={closeMobileMenu}>Ministérios</StyledNavLink>
          <StyledNavLink to="/eventos" onClick={closeMobileMenu}>Eventos</StyledNavLink>
          {/* <StyledNavLink to="/inscricoes" onClick={closeMobileMenu}>Inscrições</StyledNavLink> */}
          <StyledNavLink to="/cultos" onClick={closeMobileMenu}>Cultos</StyledNavLink>
          <StyledNavLink to="/contribua" onClick={closeMobileMenu}>Contribuir</StyledNavLink>
          <StyledNavLink to="/mural-oracao" onClick={closeMobileMenu}>Mural Oração</StyledNavLink>
          {/* {isLoggedIn && (
          )} */}
          
          <AuthSection>
          
          </AuthSection>
        </NavLinksContainer>
      </NavWrapper>
    </HeaderContainer>
  );
};

export default Header;

 
                 //Codigo de login para um implementação futura
  //{  isLoggedIn ? (
  //            <>
  //              {currentUser && <UserInfo><FaUserCircle /> {currentUser.nome || currentUser.email}</UserInfo>}
  //              <LogoutButton onClick={() => { logout(); closeMobileMenu(); }}>
  //                <FaSignOutAlt /> Sair
  //              </LogoutButton>
  //            </>
  //          ) : (
  //            <>
  //              <AuthLink as={Link} to="/login" onClick={closeMobileMenu}>Login</AuthLink>
  //              {/* <AuthLink as={Link} to="/register" onClick={closeMobileMenu}>Cadastre-se</AuthLink> */}
  //            </>
  //          )}