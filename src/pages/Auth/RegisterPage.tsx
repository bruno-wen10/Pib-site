import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUserPlus, FaEnvelope, FaLock, FaUser, FaPhone, FaCalendarAlt, FaCheck } from "react-icons/fa";
import { AltLink, CheckboxContainer, ErrorMessage, Form, FormGroup, FormRow, Input, Label, PageContainer, SubmitButton, Subtitle, SuccessMessage, Title } from "./RegisterPage-Styled";


const RegisterPage: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [membro, setMembro] = useState(false);
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
      setError("As senhas são diferentes.");
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
        senha, // Armazena a senha criptografada
        perfil: membro ? "Membro" : "Visitante",
        userAdm: false, // Perfil padrão
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
              placeholder="seu email"
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
            <FormGroup>
              <Label htmlFor="membro">Você é membro da Pib aceito ou aclamado em assembleia?</Label>
              <input
                type="checkbox"
                id="membro"
                checked={membro}
                onChange={(e) => setMembro(e.target.checked)}
              />
              <span>{membro ? "Sim" : "Não"}</span>
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
