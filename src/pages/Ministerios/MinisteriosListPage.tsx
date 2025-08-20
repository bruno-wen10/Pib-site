import React from "react";
import {
  CardContent,
  CardDescription,
  CardImage,
  CardTitle,
  ErrorText,
  IntroText,
  LoadingText,
  MinisterioCard,
  MinisteriosGrid,
  PageContainer,
  SaibaMaisButton,
  Title,
} from "./MinisterioListPage";
import { useMinisterios } from "@/hooks/context/use-Ministerios-List";

const MinisteriosListPage = () => {
  const { ministerios, isLoading, error } = useMinisterios();
  console.log("MinisteriosListPage - Dados dos ministérios:", ministerios);

  if (isLoading) {
    return <LoadingText>Carregando ministérios...</LoadingText>;
  }

  if (error) {
    return <ErrorText>{error}</ErrorText>;
  }

  return (
    <PageContainer>
      <Title>Nossos Ministérios</Title>
      <IntroText>
        Conheça os ministérios da nossa igreja, áreas de serviço e comunhão onde
        você pode crescer na fé, desenvolver seus dons e fazer a diferença na
        vida de outras pessoas. Encontre o seu lugar e junte-se a nós!
      </IntroText>
      {ministerios.length === 0 && !isLoading && (
        <LoadingText>Nenhum ministério encontrado.</LoadingText>
      )}
      <MinisteriosGrid>
        {ministerios.map((ministerio, index) => (
          <MinisterioCard
            key={ministerio.id}
            style={{ "--card-index": index } as React.CSSProperties}
          >
            <CardImage
              src={ministerio.imagem}
              alt={`Imagem do Ministério ${ministerio.nome}`}
            />
            <CardContent>
              <CardTitle>{ministerio.nome}</CardTitle>
              <CardDescription>{ministerio.descricaoCurta}</CardDescription>
              <SaibaMaisButton to={`/ministerios/${ministerio.slug}`}>
                Saiba Mais
              </SaibaMaisButton>
            </CardContent>
          </MinisterioCard>
        ))}
      </MinisteriosGrid>
    </PageContainer>
  );
};

export default MinisteriosListPage;
