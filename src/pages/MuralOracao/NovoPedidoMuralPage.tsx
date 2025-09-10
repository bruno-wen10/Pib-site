import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaPaperPlane, FaTimes } from "react-icons/fa";
import { ButtonGroup, CancelButton, ErrorMessage, Form, FormGroup, Input, Label, PageContainer, SubmitButton, SuccessMessage, Textarea, Title } from "./NovoPedidoMural-Styled";


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
          <Label htmlFor="autor">Seu Nome </Label>
          <Input
            type="text"
            id="autor"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            placeholder="Ex: João Silva"
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