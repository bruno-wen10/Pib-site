import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import { theme } from "../../styles/theme";
import { FaSignInAlt, FaUserPlus, FaEnvelope, FaLock } from "react-icons/fa";

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

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageContainer = styled.div`
  padding: ${theme.spacings.large} ${theme.spacings.medium};
  animation: ${fadeIn} 0.8s ease-out;
  max-width: 450px;
  margin: ${theme.spacings.xlarge} auto;
  background-color: ${theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: ${theme.fontSizes.xxlarge};
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.heading};
  text-align: center;
  margin-bottom: ${theme.spacings.large};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.medium};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacings.xsmall};
  font-weight: 600;
  display: flex;
  align-items: center;
  svg {
    margin-right: ${theme.spacings.xsmall};
    color: ${theme.colors.secondary};
  }
`;

const Input = styled.input`
  padding: ${theme.spacings.small_medium}; // Um pouco mais de padding
  border: 1px solid ${theme.colors.lightGray};
  border-radius: 4px;
  font-size: ${theme.fontSizes.medium};
  font-family: ${theme.fonts.main};
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: ${theme.colors.primary};
    outline: none;
    box-shadow: 0 0 0 3px ${theme.colors.primary}40; // Sombra de foco mais suave
  }
`;

const SubmitButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: ${theme.spacings.medium};
  border: none;
  border-radius: 4px;
  font-size: ${theme.fontSizes.large};
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: ${theme.spacings.small};

  svg {
    margin-right: ${theme.spacings.small};
  }

  &:hover {
    background-color: ${theme.colors.secondary};
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: ${theme.colors.mediumGray};
    cursor: not-allowed;
    transform: none;
  }
`;

const AltLink = styled(Link)`
  color: ${theme.colors.primary};
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  display: block;
  margin-top: ${theme.spacings.medium};
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.secondary};
    text-decoration: underline;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: ${theme.fontSizes.small};
  text-align: center;
  margin-top: ${theme.spacings.small};
`;

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

