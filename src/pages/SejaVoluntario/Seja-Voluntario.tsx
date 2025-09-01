import React, { useState } from "react";
import axios from "axios";
import {
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaHeart,
  FaInfoCircle,
} from "react-icons/fa";
import {
  ButtonGroup,
  ErrorMessage,
  FormGroup,
  FuncaoOption,
  FuncoesGroup,
  HeaderSection,
  Input,
  Label,
  PageContainer,
  Select,
  SubmitButton,
  Subtitle,
  SuccessMessage,
  Textarea,
  Title,
} from "./Seja-Voluntario-Styled";
import { FormData } from "@/types/seja-volintario";
import { AreasVoluntarios } from "@/components/ui/areas-volutarios";
import { useMinisterios } from "@/hooks/context/use-Ministerios-List";



const InscricoesPage: React.FC = () => {
  const { ministerios } = useMinisterios();
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    ministerio: "",
    mensagem: "",
  });
  const [funcoesSelecionadas, setFuncoesSelecionadas] = useState<string[] >([]);
  const [areasParaVoluntariar, setAreasParaVoluntariar] =
    useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);


  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id === "ministerio" ? "ministerio" : id]: value,
    }));

    if (id === "ministerio") {
      setFuncoesSelecionadas([]); // resetar funções ao mudar de ministério
    }
  };

  const handleFuncoesChange = (funcao: string) => {
    setFuncoesSelecionadas((prev) =>
      prev.includes(funcao)
        ? prev.filter((f) => f !== funcao)
        : [...prev, funcao]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFormError(null);
    setFormSuccess(null);

    const { nome, email, telefone, ministerio } = formData;
    if (!nome || !email || !telefone || !ministerio) {
      setFormError("Por favor, preencha todos os campos obrigatórios (*).");
      setLoading(false);
      return;
    }

    const novaInscricao = {
      ...formData,
      funcoes: funcoesSelecionadas, // envia ids das funções selecionadas
      data: new Date().toISOString(),
    };

    try {
      await axios.post("http://localhost:3001/inscricoes", novaInscricao);
      setFormSuccess(
        "Sua inscrição para voluntariado foi enviada com sucesso! Entraremos em contato em breve."
      );
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        ministerio: "",
        mensagem: "",
      });
      setFuncoesSelecionadas([]);
      setTimeout(() => setFormSuccess(null), 3000);
    } catch (err) {
      console.error("Erro ao enviar inscrição:", err);
      setFormError(
        "Falha ao enviar sua inscrição. Tente novamente mais tarde."
      );
    }
    setLoading(false);
  };

  const handleVoluntarios = () => {
    setAreasParaVoluntariar(!areasParaVoluntariar);
  };

  // pega o ministério atualmente selecionado
  const ministerioSelecionado = ministerios.find(
    (m) => m.nome === formData.ministerio
  );

  return (
    <PageContainer>
      <HeaderSection>
        <Title>Seja um Voluntário</Title>
        <Subtitle>
          Quer servir a Deus com seus dons e talentos? Preencha o formulário
          abaixo e junte-se a um de nossos ministérios.
        </Subtitle>
        <div>
          <ButtonGroup>
            <SubmitButton type="button" onClick={handleVoluntarios}>
              {areasParaVoluntariar
                ? "Ocultar Áreas"
                : "Instruções para se voluntariar"}
            </SubmitButton>
          </ButtonGroup>
          {areasParaVoluntariar && <AreasVoluntarios />}
        </div>
      </HeaderSection>

      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="nome">
            <FaUser /> Nome Completo *
          </Label>
          <Input
            type="text"
            id="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Seu nome completo"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">
            <FaEnvelope /> E-mail *
          </Label>
          <Input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seuemail@exemplo.com"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="telefone">
            <FaPhone /> Telefone (WhatsApp) *
          </Label>
          <Input
            type="tel"
            id="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="(XX) XXXXX-XXXX"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="ministerio">
            <FaHeart /> Ministério de Interesse *
          </Label>
          <Select
            id="ministerio"
            value={formData.ministerio}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Selecione um ministério
            </option>
            {ministerios.map((m) => (
              <option key={m.id} value={m.nome}>
                {m.nome}
              </option>
            ))}
            <option value="outro">Outro / Não sei ainda</option>
          </Select>
        </FormGroup>

        {/* Renderiza funções do ministério se existirem */}
        {ministerioSelecionado?.funcoes && (
  <FormGroup>
    <Label>Escolha suas funções de interesse:</Label>
    <FuncoesGroup>
      {ministerioSelecionado.funcoes.map((f) => (
        <FuncaoOption key={f.id} htmlFor={`funcao-${f.id}`}>
          <input
            type="checkbox"
            id={`funcao-${f.id}`}
            checked={funcoesSelecionadas.includes(f.nome)}
            onChange={() => handleFuncoesChange(f.nome)}
          />
          {f.nome}
        </FuncaoOption>
      ))}
    </FuncoesGroup>
  </FormGroup>
)}


        <FormGroup>
          <Label htmlFor="mensagem">
            <FaInfoCircle /> Fale um pouco sobre você (opcional)
          </Label>
          <Textarea
            id="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
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
      </form>
    </PageContainer>
  );
};

export default InscricoesPage;
