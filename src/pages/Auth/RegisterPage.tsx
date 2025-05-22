import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import { theme } from "../../styles/theme";
import { FaUserPlus, FaEnvelope, FaLock, FaUser, FaPhone, FaCalendarAlt, FaCheck } from "react-icons/fa";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageContainer = styled.div`
  padding: ${theme.spacings.large} ${theme.spacings.medium};
  animation: ${fadeIn} 0.8s ease-out;
  max-width: 550px;
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
  margin-bottom: ${theme.spacings.medium};
`;

const Subtitle = styled.p`
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.text};
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

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacings.medium};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
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
  padding: ${theme.spacings.small_medium};
  border: 1px solid ${theme.colors.lightGray};
  border-radius: 4px;
  font-size: ${theme.fontSizes.medium};
  font-family: ${theme.fonts.main};
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: ${theme.colors.primary};
    outline: none;
    box-shadow: 0 0 0 3px ${theme.colors.primary}40;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: ${theme.spacings.small};
  
  input {
    margin-top: 5px;
    margin-right: ${theme.spacings.small};
  }
  
  label {
    font-size: ${theme.fontSizes.small};
    line-height: 1.5;
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

const SuccessMessage = styled.p`
  color: green;
  font-size: ${theme.fontSizes.medium};
  text-align: center;
  margin-top: ${theme.spacings.small};
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    margin-right: ${theme.spacings.xsmall};
  }
`;

const RegisterPage: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [aceitaTermos, setAceitaTermos] = useState(false);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    // Validações básicas
    if (!nome.trim() || !email.trim() || !senha.trim() || !confirmarSenha.trim()) {
      setError("Por favor, preencha todos os campos obrigatórios.");
      setLoading(false);
      return;
    }

    if (senha !== confirmarSenha) {
      setError("As senhas não coincidem.");
      setLoading(false);
      return;
    }

    if (!aceitaTermos) {
      setError("Você precisa aceitar os termos de uso e política de privacidade.");
      setLoading(false);
      return;
    }

    try {
      // Verificar se o email já está em uso
      const checkEmail = await axios.get(`http://localhost:3001/usuarios?email=${email}`);
      
      if (checkEmail.data && checkEmail.data.length > 0) {
        setError("Este e-mail já está em uso. Tente fazer login ou use outro e-mail.");
        setLoading(false);
        return;
      }

      // Criar novo usuário
      const novoUsuario = {
        nome,
        email,
        senha, // Em uma aplicação real, a senha seria criptografada
        perfil: "membro", // Perfil padrão
        dataCadastro: new Date().toISOString(),
        telefone,
        dataNascimento
      };

      await axios.post("http://localhost:3001/usuarios", novoUsuario);
      setSuccess("Cadastro realizado com sucesso!");
      
      // Limpar formulário
      setNome("");
      setEmail("");
      setSenha("");
      setConfirmarSenha("");
      setTelefone("");
      setDataNascimento("");
      setAceitaTermos(false);
      
      // Redirecionar após um tempo
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      console.error("Erro ao cadastrar:", err);
      setError("Falha ao realizar cadastro. Tente novamente mais tarde.");
    }
    setLoading(false);
  };

  return (
    <PageContainer>
      <Title>Cadastre-se</Title>
      <Subtitle>Crie sua conta para participar da nossa comunidade online</Subtitle>
      
      {success ? (
        <SuccessMessage>
          <FaCheck /> {success}
        </SuccessMessage>
      ) : (
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="nome"><FaUser /> Nome Completo *</Label>
            <Input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome completo"
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email"><FaEnvelope /> E-mail *</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seuemail@exemplo.com"
              required
            />
          </FormGroup>
          
          <FormRow>
            <FormGroup>
              <Label htmlFor="senha"><FaLock /> Senha *</Label>
              <Input
                type="password"
                id="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Sua senha"
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="confirmarSenha"><FaLock /> Confirmar Senha *</Label>
              <Input
                type="password"
                id="confirmarSenha"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                placeholder="Confirme sua senha"
                required
              />
            </FormGroup>
          </FormRow>
          
          <FormRow>
            <FormGroup>
              <Label htmlFor="telefone"><FaPhone /> Telefone</Label>
              <Input
                type="tel"
                id="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="(XX) XXXXX-XXXX"
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="dataNascimento"><FaCalendarAlt /> Data de Nascimento</Label>
              <Input
                type="date"
                id="dataNascimento"
                value={dataNascimento}
                onChange={(e) => setDataNascimento(e.target.value)}
              />
            </FormGroup>
          </FormRow>
          
          <CheckboxContainer>
            <input
              type="checkbox"
              id="aceitaTermos"
              checked={aceitaTermos}
              onChange={(e) => setAceitaTermos(e.target.checked)}
              required
            />
            <label htmlFor="aceitaTermos">
              Concordo com os <Link to="/termos-de-uso">Termos de Uso</Link> e a <Link to="/politica-de-privacidade">Política de Privacidade</Link> da igreja.
            </label>
          </CheckboxContainer>
          
          {error && <ErrorMessage>{error}</ErrorMessage>}
          
          <SubmitButton type="submit" disabled={loading}>
            <FaUserPlus /> {loading ? "Cadastrando..." : "Cadastrar"}
          </SubmitButton>
        </Form>
      )}
      
      <AltLink to="/login">
        Já tem uma conta? Faça login
      </AltLink>
    </PageContainer>
  );
};

export default RegisterPage;
