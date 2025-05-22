import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import { theme } from "../../styles/theme";
import { FaPaperPlane, FaTimes } from "react-icons/fa";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageContainer = styled.div`
  padding: ${theme.spacings.large} ${theme.spacings.medium};
  animation: ${fadeIn} 0.8s ease-out;
  max-width: 700px;
  margin: ${theme.spacings.large} auto;
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

const Textarea = styled.textarea`
  padding: ${theme.spacings.small};
  border: 1px solid ${theme.colors.lightGray};
  border-radius: 4px;
  font-size: ${theme.fontSizes.medium};
  font-family: ${theme.fonts.main};
  min-height: 150px;
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

const CancelButton = styled(SubmitButton)`
  background-color: ${theme.colors.lightGray};
  color: ${theme.colors.text};

  &:hover {
    background-color: ${theme.colors.mediumGray};
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

const NovoPedidoMuralPage: React.FC = () => {
  const [autor, setAutor] = useState("");
  const [texto, setTexto] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (!autor.trim() || !texto.trim()) {
      setError("Por favor, preencha seu nome e o pedido de oração.");
      setLoading(false);
      return;
    }

    const novoPedido = {
      autor,
      texto,
      data: new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" }),
      interacoes: 0,
      comentarios: [],
    };

    try {
      await axios.post("http://localhost:3001/muralPiedade", novoPedido);
      setSuccess("Seu pedido de oração foi enviado com sucesso!");
      setAutor("");
      setTexto("");
      setTimeout(() => {
        navigate("/mural-piedade");
      }, 2000);
    } catch (err) {
      console.error("Erro ao enviar pedido:", err);
      setError("Falha ao enviar seu pedido. Tente novamente mais tarde.");
    }
    setLoading(false);
  };

  return (
    <PageContainer>
      <Title>Novo Pedido de Oração</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="autor">Seu Nome (ou "Anônimo")</Label>
          <Input
            type="text"
            id="autor"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            placeholder="Ex: João Silva ou Anônimo"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="texto">Seu Pedido de Oração</Label>
          <Textarea
            id="texto"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Descreva aqui seu pedido..."
            required
          />
        </FormGroup>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}
        <ButtonGroup>
          <CancelButton type="button" onClick={() => navigate("/mural-piedade")} disabled={loading}>
            <FaTimes /> Cancelar
          </CancelButton>
          <SubmitButton type="submit" disabled={loading}>
            <FaPaperPlane /> {loading ? "Enviando..." : "Enviar Pedido"}
          </SubmitButton>
        </ButtonGroup>
      </Form>
    </PageContainer>
  );
};

export default NovoPedidoMuralPage;

