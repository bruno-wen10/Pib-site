// src/pages/LoginPage.tsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaSignInAlt, FaUserPlus, FaEnvelope, FaLock } from "react-icons/fa";
import { AltLink, ErrorMessage, Form, FormGroup, Input, Label, PageContainer, SubmitButton, Title } from "./LoginPage-Styled";


// Simulação de um contexto de autenticação ou estado global
// Em uma aplicação real, isso seria gerenciado por Context API, Redux, Zustand, etc.
const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser") || "null"));

  const login = (userData: any) => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify(userData));
    setIsLoggedIn(true);
    setCurrentUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  return { isLoggedIn, currentUser, login, logout }; 
  // Exportar logout para ser usado no Header, por exemplo
};

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login } = useAuth(); // Usar o hook de simulação de auth

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (!email.trim() || !senha.trim()) {
      setError("Por favor, preencha e-mail e senha.");
      setLoading(false);
      return;
    }

    try {
      // No JSON Server, para buscar por email e senha, precisaríamos de algo como:
      // GET /usuarios?email=EMAIL_AQUI&senha=SENHA_AQUI
      const response = await axios.get(`http://localhost:3001/usuarios?email=${email}&senha=${senha}`);
      
      if (response.data && response.data.length > 0) {
        // Usuário encontrado, simular login
        login(response.data[0]); // Salva o primeiro usuário encontrado
        navigate("/"); // Redireciona para a home ou dashboard
      } else {
        setError("E-mail ou senha inválidos.");
      }
    } catch (err) {
      console.error("Erro ao tentar fazer login:", err);
      setError("Falha ao tentar fazer login. Verifique sua conexão ou tente mais tarde.");
    }
    setLoading(false);
  };

  return (
    <PageContainer>
      <Title>Acessar Conta</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email"><FaEnvelope /> E-mail</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seuemail@exemplo.com"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="senha"><FaLock /> Senha</Label>
          <Input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Sua senha"
            required
          />
        </FormGroup>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <SubmitButton type="submit" disabled={loading}>
          <FaSignInAlt /> {loading ? "Entrando..." : "Entrar"}
        </SubmitButton>
      </Form>
      <AltLink to="/register">
        Não tem uma conta? Cadastre-se <FaUserPlus style={{ marginLeft: "5px" }}/>
      </AltLink>
    </PageContainer>
  );
};

export default LoginPage;