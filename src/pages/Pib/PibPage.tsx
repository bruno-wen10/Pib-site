import PastorClaudinei from "../../assets/images-pastores/Pastor-Claudinei.jpg";
import PastorSidonio from "../../assets/images-pastores/Pr-Sidonio.jpg";
import PastorEdmilson from "../../assets/images-pastores/Pastor-Claudinei2.jpg";
import PastorNeves from "../../assets/images-pastores/Pastor-Euripides.jpg";
import { ImagePerfil, ImagePerfilContainer, ImagePlaceholder, PageContainer, Paragraph, Section, SectionTitle, Title } from "./PibPage-style";



const PibPage = () => {
  const imagesPastoresPib = [
    { src: PastorClaudinei, alt: "Pastor Claudinei de Araujo" },
    { src: PastorNeves, alt: "Pastor Euripides Neves" },
    { src: PastorSidonio, alt: "Pastor Sidónio" },
    { src: PastorEdmilson, alt: "Pastor Edmilson" },
  ];
  return (
    <PageContainer>
      <Title>Sobre a PIB </Title>

      <Section>
        <SectionTitle>Nossa História</SectionTitle>
        <br />
        <br />
        <ImagePlaceholder>
          <iframe
            width="600"
            height="315"
            src="https://www.youtube.com/embed/62PqXGkkBnI?si=AMWyv-9mPrbZYIil&amp;start=74"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </ImagePlaceholder>
        <br />
        <br />
        <Paragraph>
          A Primeira Igreja Batista em Franca-SP tem suas raízes na rica
          história do movimento batista no Brasil, que se iniciou com a chegada
          dos primeiros missionários e a organização das primeiras igrejas no
          final do século XIX. A Convenção Batista Brasileira, fundada em 1907,
          é o órgão máximo que congrega as igrejas batistas no país, promovendo
          a cooperação em missões, educação teológica e publicações. Nossa
          igreja, como parte dessa história, busca honrar o legado de fé e
          serviço daqueles que nos precederam, mantendo os princípios batistas
          de autonomia da igreja local, sacerdócio individual do crente e a
          suficiência das Escrituras Sagradas.
        </Paragraph>
        <Paragraph>
          A Primeira Igreja Batista em Franca - SP nasceu do desejo de proclamar
          o Evangelho de Jesus Cristo de forma fiel às Escrituras e relevante
          para a comunidade. Desde a sua fundação, nosso propósito tem sido
          anunciar a salvação pela graça, mediante a fé, e servir como um farol
          de esperança e amor cristão. Ao longo dos anos, a PIB tem sido um
          lugar de comunhão, crescimento espiritual e serviço. Vidas têm sido
          transformadas pelo poder do Evangelho, famílias têm sido restauradas e
          a Palavra de Deus tem sido pregada com clareza e compromisso. Nossa
          trajetória é marcada pela fidelidade ao Senhor, pela cooperação com a
          Convenção Batista e pelo envolvimento ativo na evangelização local e
          mundial, sempre buscando glorificar a Deus em tudo o que fazemos.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>No Que Cremos</SectionTitle>
        <Paragraph>
          Nós cremos na Bíblia como a Palavra de Deus inspirada, infalível e
          autoritária para a fé e prática. Cremos em um só Deus, eternamente
          existente em três pessoas: Pai, Filho e Espírito Santo. Cremos na
          divindade de Jesus Cristo, em seu nascimento virginal, em sua vida sem
          pecado, em seus milagres, em sua morte vicária e expiatória, em sua
          ressurreição corporal, em sua ascensão à direita do Pai e em seu
          retorno pessoal em poder e glória. Cremos na salvação pela graça,
          mediante a fé em Jesus Cristo. Cremos na autonomia da igreja local e
          na separação entre Igreja e Estado.
        </Paragraph>
        <Paragraph>
          Cremos na importância da igreja local como comunidade de crentes
          regenerados, autônoma e comprometida com o cumprimento da Grande
          Comissão: fazer discípulos de todas as nações. Cremos nas ordenanças
          deixadas por Cristo: o Batismo por imersão e a Ceia do Senhor, como
          símbolos da nossa fé e comunhão com Ele.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Nossa Missão, Visão e Valores</SectionTitle>
        <Paragraph>
          <strong>Missão:</strong>
          <br />
           Proclamar o Evangelho de Jesus Cristo, fazer
          discípulos e servir à comunidade, glorificando a Deus em todas as
          coisas.
        </Paragraph>
        <Paragraph>
          <strong>Visão:</strong> 
          <br />
          Ser uma igreja bíblica, acolhedora e
          missionária, que impacta a cidade, o Brasil e o mundo com o amor de
          Cristo, formando discípulos comprometidos com a Palavra e com o
          serviço no Reino de Deus.
        </Paragraph>
        <Paragraph>
          <strong>Valores:</strong> 
          <br />
          Fidelidade à Palavra de Deus – Tudo o que
          fazemos está fundamentado na Bíblia. 
          <br /> 
          Adoração Cristocêntrica – Vivemos
          para glorificar a Cristo em espírito e em verdade.
          <br />
           Comunhão Fraterna –
          Valorizamos o amor, o cuidado e a unidade entre os irmãos.
          <br />
          Evangelização e Missões – Cumprimos o chamado de fazer discípulos em
          nossa cidade e até aos confins da Terra.
          <br />
           Serviço ao Próximo – Expressamos nossa fé por meio de atos de amor e compaixão.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Nossa Liderança</SectionTitle>
        <Paragraph>
          Conheça nossos líderes e pastores que guiam a PIB.
        </Paragraph>
        <ImagePerfilContainer>
          {imagesPastoresPib.map((pastor, index) => (
            <ImagePerfil key={index}>
              <div>
                <img src={pastor.src} alt={pastor.alt} />
                <Paragraph>{pastor.alt}</Paragraph>
              </div>
            </ImagePerfil>
          ))}
        </ImagePerfilContainer>
      </Section>

     
    </PageContainer>
  );
};

export default PibPage;
