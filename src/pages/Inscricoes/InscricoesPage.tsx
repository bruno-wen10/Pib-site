import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import { theme } from "../../styles/theme";
import { FaPaperPlane, FaTimes, FaUser, FaEnvelope, FaPhone, FaHeart, FaInfoCircle } from "react-icons/fa";

// Interface para os dados do Ministério (para o select)
interface MinisterioOption {
  id: number;
  nome: string;
  slug: string;
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageContainer = styled.div`
  padding: ${theme.spacings.large} ${theme.spacings.medium};
  animation: ${fadeIn} 0.8s ease-out;
  max-width: 800px;
  margin: ${theme.spacings.large} auto;
  background-color: ${theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacings.large};
`;

const Title = styled.h1`
  font-size: ${theme.fontSizes.xxlarge};
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.heading};
  margin-bottom: ${theme.spacings.small};
`;

const Subtitle = styled.p`
  font-size: ${theme.fontSizes.large};
  color: ${theme.colors.text};
  max-width: 700px;
  margin: 0 auto ${theme.spacings.medium} auto;
  line-height: 1.6;
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
  padding: ${theme.spacings.small};
  border: 1px solid ${theme.colors.lightGray};
  border-radius: 4px;
  font-size: ${theme.fontSizes.medium};
  font-family: ${theme.fonts.main};
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${theme.colors.primary};
    outline: none;
    box-shadow: 0 0 0 2px ${theme.colors.primary}30;
  }
`;

const Select = styled.select`
  padding: ${theme.spacings.small};
  border: 1px solid ${theme.colors.lightGray};
  border-radius: 4px;
  font-size: ${theme.fontSizes.medium};
  font-family: ${theme.fonts.main};
  background-color: white;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${theme.colors.primary};
    outline: none;
    box-shadow: 0 0 0 2px ${theme.colors.primary}30;
  }
`;

const Textarea = styled.textarea`
  padding: ${theme.spacings.small};
  border: 1px solid ${theme.colors.lightGray};
  border-radius: 4px;
  font-size: ${theme.fontSizes.medium};
  font-family: ${theme.fonts.main};
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${theme.colors.primary};
    outline: none;
    box-shadow: 0 0 0 2px ${theme.colors.primary}30;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${theme.spacings.small};
  margin-top: ${theme.spacings.medium};
`;

const SubmitButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: ${theme.spacings.small} ${theme.spacings.medium};
  border: none;
  border-radius: 4px;
  font-size: ${theme.fontSizes.medium};
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: inline-flex;
  align-items: center;

  svg {
    margin-right: ${theme.spacings.xsmall};
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
`;

const InscricoesPage: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [ministerioSelecionado, setMinisterioSelecionado] = useState("");
  const [mensagem, setMensagem] = useState("");
  
  const [ministerios, setMinisterios] = useState<MinisterioOption[]>([]);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMinisterios = async () => {
      try {
        const response = await axios.get("http://localhost:3001/ministerios");
        setMinisterios(response.data.map((m: any) => ({ id: m.id, nome: m.nome, slug: m.slug })));
      } catch (err) {
        console.error("Erro ao buscar ministérios para o select:", err);
        // Não impede o formulário de funcionar, mas o select ficará vazio ou com erro
      }
    };
    fetchMinisterios();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setFormError(null);
    setFormSuccess(null);

    if (!nome.trim() || !email.trim() || !telefone.trim() || !ministerioSelecionado) {
      setFormError("Por favor, preencha todos os campos obrigatórios (*).");
      setLoading(false);
      return;
    }

    const novaInscricao = {
      nome,
      email,
      telefone,
      ministerio: ministerioSelecionado,
      mensagem,
      data: new Date().toISOString(), // Salva data em formato ISO
    };

    try {
      await axios.post("http://localhost:3001/inscricoes", novaInscricao);
      setFormSuccess("Sua inscrição para voluntariado foi enviada com sucesso! Entraremos em contato em breve.");
      // Limpar formulário
      setNome("");
      setEmail("");
      setTelefone("");
      setMinisterioSelecionado("");
      setMensagem("");
      setTimeout(() => {
        setFormSuccess(null); // Limpa a mensagem de sucesso após um tempo
        // Pode-se navegar para outra página se desejado
        // navigate("/"); 
      }, 3000);
    } catch (err) {
      console.error("Erro ao enviar inscrição:", err);
      setFormError("Falha ao enviar sua inscrição. Tente novamente mais tarde.");
    }
    setLoading(false);
  };

  return (
    <PageContainer>
      <HeaderSection>
        <Title>Seja um Voluntário</Title>
        <Subtitle>
          Quer servir a Deus com seus dons e talentos? Preencha o formulário abaixo e junte-se a um de nossos ministérios. Sua ajuda é muito bem-vinda!
        </Subtitle>
      </HeaderSection>
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
        <FormGroup>
          <Label htmlFor="telefone"><FaPhone /> Telefone (WhatsApp) *</Label>
          <Input
            type="tel"
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="(XX) XXXXX-XXXX"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="ministerio"><FaHeart /> Ministério de Interesse *</Label>
          <Select 
            id="ministerio" 
            value={ministerioSelecionado} 
            onChange={(e) => setMinisterioSelecionado(e.target.value)}
            required
          >
            <option value="" disabled>Selecione um ministério</option>
            {ministerios.map(m => (
              <option key={m.id} value={m.nome}>{m.nome}</option>
            ))}
            <option value="outro">Outro / Não sei ainda</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="mensagem"><FaInfoCircle /> Fale um pouco sobre você e suas habilidades (opcional)</Label>
          <Textarea
            id="mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            placeholder="Ex: Tenho experiência com crianças, gosto de música, sou organizado(a), etc."
          />
        </FormGroup>
        {formError && <ErrorMessage>{formError}</ErrorMessage>}
        {formSuccess && <SuccessMessage>{formSuccess}</SuccessMessage>}
        <ButtonGroup>
          <SubmitButton type="submit" disabled={loading}>
            <FaPaperPlane /> {loading ? "Enviando..." : "Enviar Inscrição"}
          </SubmitButton>
        </ButtonGroup>
      </Form>
    </PageContainer>
  );
};

export default InscricoesPage;

