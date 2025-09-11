import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaPaperPlane, FaTimes } from "react-icons/fa";
import { ButtonGroup, CancelButton, ErrorMessage, Form, FormGroup, Input, Label, PageContainer, SubmitButton, SuccessMessage, Textarea, Title } from "./NovoPedidoMural-Styled";


const NovoPedidoMuralPage: React.FC = () => {
  const [nome, setNome] = useState("");
  const [pedido, setPedido] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

 const handleSubmit = async (event: React.FormEvent) => {
  event.preventDefault();
  setLoading(true);
  setError(null);
  setSuccess(null);

  if (!nome.trim() || !pedido.trim()) {
    setError("Por favor, preencha seu nome e o pedido de oração.");
    setLoading(false);
    return;
  }

  const novoPedido = {
  nome,
  pedido_oracao: pedido,           
  interacoes: 0,
  data_criacao: new Date().toISOString(),
};

  try {
    await axios.post(import.meta.env.VITE_API_URL + "/mural-oracao", novoPedido);

    setSuccess("Seu pedido de oração foi enviado com sucesso!");
    setNome("");
    setPedido("");
    setTimeout(() => navigate("/mural-oracao"), 2000);
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
          <Label htmlFor="nome">Seu Nome </Label>
          <Input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Ex: João Silva"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="texto">Seu Pedido de Oração</Label>
          <Textarea
            id="pedido"
            value={pedido}
            onChange={(e) => setPedido(e.target.value)}
            placeholder="Descreva aqui seu pedido..."
            required
          />
        </FormGroup>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}
        <ButtonGroup>
          <CancelButton type="button" onClick={() => navigate("/mural-oracao")} disabled={loading}>
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