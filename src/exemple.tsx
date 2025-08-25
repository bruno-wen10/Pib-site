// import React, { useState, useEffect } from "react";
// import { Form, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { FaPaperPlane,  FaUser, FaEnvelope, FaPhone, FaHeart, FaInfoCircle } from "react-icons/fa";
// import { ButtonGroup, ErrorMessage, FormGroup, HeaderSection, Input, Label, PageContainer, Select, SubmitButton, Subtitle, SuccessMessage, Textarea, Title } from "./Seja-Voluntario-Styled";

//       // Interface para os dados do Ministério (para o select)
//       interface MinisterioOption {
//         id: number;
//         nome: string;
//         slug: string;
//       }

// const InscricoesPage: React.FC = () => {
//   const [nome, setNome] = useState("");
//   const [email, setEmail] = useState("");
//   const [telefone, setTelefone] = useState("");
//   const [ministerioSelecionado, setMinisterioSelecionado] = useState("");
//   const [mensagem, setMensagem] = useState("");
  
//   const [ministerios, setMinisterios] = useState<MinisterioOption[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [formError, setFormError] = useState<string | null>(null);
//   const [formSuccess, setFormSuccess] = useState<string | null>(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchMinisterios = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/ministerios");
//         setMinisterios(response.data.map((m: any) => ({ id: m.id, nome: m.nome, slug: m.slug })));
//       } catch (err) {
//         console.error("Erro ao buscar ministérios para o select:", err);
//         // Não impede o formulário de funcionar, mas o select ficará vazio ou com erro
//       }
//     };
//     fetchMinisterios();
//   }, []);

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     setLoading(true);
//     setFormError(null);
//     setFormSuccess(null);

//     if (!nome.trim() || !email.trim() || !telefone.trim() || !ministerioSelecionado) {
//       setFormError("Por favor, preencha todos os campos obrigatórios (*).");
//       setLoading(false);
//       return;
//     }

//     const novaInscricao = {
//       nome,
//       email,
//       telefone,
//       ministerio: ministerioSelecionado,
//       mensagem,
//       data: new Date().toISOString(), // Salva data em formato ISO
//     };

//     try {
//       await axios.post("http://localhost:3001/inscricoes", novaInscricao);
//       setFormSuccess("Sua inscrição para voluntariado foi enviada com sucesso! Entraremos em contato em breve.");
//       // Limpar formulário
//       setNome("");
//       setEmail("");
//       setTelefone("");
//       setMinisterioSelecionado("");
//       setMensagem("");
//       setTimeout(() => {
//         setFormSuccess(null); // Limpa a mensagem de sucesso após um tempo
//         // Pode-se navegar para outra página se desejado
//         // navigate("/"); 
//       }, 3000);
//     } catch (err) {
//       console.error("Erro ao enviar inscrição:", err);
//       setFormError("Falha ao enviar sua inscrição. Tente novamente mais tarde.");
//     }
//     setLoading(false);
//   };

//   return (
//     <PageContainer>
//       <HeaderSection>
//         <Title>Seja um Voluntário</Title>
//         <Subtitle>
//           Quer servir a Deus com seus dons e talentos? Preencha o formulário abaixo e junte-se a um de nossos ministérios. Sua ajuda é muito bem-vinda!
//         </Subtitle>
//       </HeaderSection>
//       <Form onSubmit={handleSubmit}>
//         <FormGroup>
//           <Label htmlFor="nome"><FaUser /> Nome Completo *</Label>
//           <Input
//             type="text"
//             id="nome"
//             value={nome}
//             onChange={(e) => setNome(e.target.value)}
//             placeholder="Seu nome completo"
//             required
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="email"><FaEnvelope /> E-mail *</Label>
//           <Input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="seuemail@exemplo.com"
//             required
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="telefone"><FaPhone /> Telefone (WhatsApp) *</Label>
//           <Input
//             type="tel"
//             id="telefone"
//             value={telefone}
//             onChange={(e) => setTelefone(e.target.value)}
//             placeholder="(XX) XXXXX-XXXX"
//             required
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="ministerio"><FaHeart /> Ministério de Interesse *</Label>
//           <Select 
//             id="ministerio" 
//             value={ministerioSelecionado} 
//             onChange={(e) => setMinisterioSelecionado(e.target.value)}
//             required
//           >
//             <option value="" disabled>Selecione um ministério</option>
//             {ministerios.map(m => (
//               <option key={m.id} value={m.nome}>{m.nome}</option>
//             ))}
//             <option value="outro">Outro / Não sei ainda</option>
//           </Select>
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="mensagem"><FaInfoCircle /> Fale um pouco sobre você e suas habilidades (opcional)</Label>
//           <Textarea
//             id="mensagem"
//             value={mensagem}
//             onChange={(e) => setMensagem(e.target.value)}
//             placeholder="Ex: Tenho experiência com crianças, gosto de música, sou organizado(a), etc."
//           />
//         </FormGroup>
//         {formError && <ErrorMessage>{formError}</ErrorMessage>}
//         {formSuccess && <SuccessMessage>{formSuccess}</SuccessMessage>}
//         <ButtonGroup>
//           <SubmitButton type="submit" disabled={loading}>
//             <FaPaperPlane /> {loading ? "Enviando..." : "Enviar Inscrição"}
//           </SubmitButton>
//         </ButtonGroup>
//       </Form>
//     </PageContainer>
//   );
// };

// export default InscricoesPage;



//  EXEMPLO PAGE SEJA VOLUNTARIO:

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   FaPaperPlane,
//   FaUser,
//   FaEnvelope,
//   FaPhone,
//   FaHeart,
//   FaInfoCircle,
// } from "react-icons/fa";
// import {
//   ButtonGroup,
//   ErrorMessage,
//   FormGroup,
//   HeaderSection,
//   Input,
//   Label,
//   PageContainer,
//   Select,
//   SubmitButton,
//   Subtitle,
//   SuccessMessage,
//   Textarea,
//   Title,
// } from "./Seja-Voluntario-Styled";
// import { MinisterioOption, FormData } from "@/types/seja-volintario";
// import { AreasVoluntarios } from "@/components/ui/areas-volutarios";

// const InscricoesPage: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     nome: "",
//     email: "",
//     telefone: "",
//     ministerio: "",
//     mensagem: "",
//   });
//   const [areasParaVoluntariar, setAreasParaVoluntariar] =
//     useState<boolean>(false);
//   const [ministerios, setMinisterios] = useState<MinisterioOption[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [formError, setFormError] = useState<string | null>(null);
//   const [formSuccess, setFormSuccess] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchMinisterios = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/ministerios");
//         setMinisterios(
//           response.data.map((m: any) => ({
//             id: m.id,
//             nome: m.nome,
//             slug: m.slug,
//           }))
//         );
//       } catch (err) {
//         console.error("Erro ao buscar ministérios:", err);
//       }
//     };
//     fetchMinisterios();
//   }, []);

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     const { id, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [id === "ministerio" ? "ministerio" : id]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setFormError(null);
//     setFormSuccess(null);

//     const { nome, email, telefone, ministerio } = formData;
//     if (!nome || !email || !telefone || !ministerio) {
//       setFormError("Por favor, preencha todos os campos obrigatórios (*).");
//       setLoading(false);
//       return;
//     }

//     const novaInscricao = {
//       ...formData,
//       data: new Date().toISOString(),
//     };

//     try {
//       await axios.post("http://localhost:3001/inscricoes", novaInscricao);
//       setFormSuccess(
//         "Sua inscrição para voluntariado foi enviada com sucesso! Entraremos em contato em breve."
//       );
//       setFormData({
//         nome: "",
//         email: "",
//         telefone: "",
//         ministerio: "",
//         mensagem: "",
//       });
//       setTimeout(() => setFormSuccess(null), 3000);
//     } catch (err) {
//       console.error("Erro ao enviar inscrição:", err);
//       setFormError(
//         "Falha ao enviar sua inscrição. Tente novamente mais tarde."
//       );
//     }
//     setLoading(false);
//   };
//   const handleVoluntarios = () => {
//     setAreasParaVoluntariar(!areasParaVoluntariar);
//   };
//   return (
//     <PageContainer>
//       <HeaderSection>
//         <Title>Seja um Voluntário</Title>
//         <Subtitle>
//           Quer servir a Deus com seus dons e talentos? Preencha o formulário
//           abaixo e junte-se a um de nossos ministérios.
//         </Subtitle>
//         <div>
//           <ButtonGroup>
//             <SubmitButton type="button" onClick={handleVoluntarios}>
//               {areasParaVoluntariar
//                 ? "Ocultar Áreas"
//                 : "Instruções para se voluntariar"}
//             </SubmitButton>
//           </ButtonGroup>
//           {areasParaVoluntariar && (
//             <AreasVoluntarios />
//           )}
//         </div>
//       </HeaderSection>

//       <form onSubmit={handleSubmit}>
//         <FormGroup>
//           <Label htmlFor="nome">
//             <FaUser /> Nome Completo *
//           </Label>
//           <Input
//             type="text"
//             id="nome"
//             value={formData.nome}
//             onChange={handleChange}
//             placeholder="Seu nome completo"
//             required
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label htmlFor="email">
//             <FaEnvelope /> E-mail *
//           </Label>
//           <Input
//             type="email"
//             id="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="seuemail@exemplo.com"
//             required
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label htmlFor="telefone">
//             <FaPhone /> Telefone (WhatsApp) *
//           </Label>
//           <Input
//             type="tel"
//             id="telefone"
//             value={formData.telefone}
//             onChange={handleChange}
//             placeholder="(XX) XXXXX-XXXX"
//             required
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label htmlFor="ministerio">
//             <FaHeart /> Ministério de Interesse *
//           </Label>
//           <Select
//             id="ministerio"
//             value={formData.ministerio}
//             onChange={handleChange}
//             required
//           >
//             <option value="" disabled>
//               Selecione um ministério
//             </option>
//             {ministerios.map((m) => (
//               <option key={m.id} value={m.nome}>
//                 {m.nome}
//               </option>
//             ))}
//             <option value="outro">Outro / Não sei ainda</option>
//           </Select>
//         </FormGroup>

//         <FormGroup>
//           <Label htmlFor="mensagem">
//             <FaInfoCircle /> Fale um pouco sobre você (opcional)
//           </Label>
//           <Textarea
//             id="mensagem"
//             value={formData.mensagem}
//             onChange={handleChange}
//             placeholder="Ex: Tenho experiência com crianças, gosto de música, sou organizado(a), etc."
//           />
//         </FormGroup>

//         {formError && <ErrorMessage>{formError}</ErrorMessage>}
//         {formSuccess && <SuccessMessage>{formSuccess}</SuccessMessage>}

//         <ButtonGroup>
//           <SubmitButton type="submit" disabled={loading}>
//             <FaPaperPlane /> {loading ? "Enviando..." : "Enviar Inscrição"}
//           </SubmitButton>
//         </ButtonGroup>
//       </form>
//     </PageContainer>
//   );
// };

// export default InscricoesPage;
