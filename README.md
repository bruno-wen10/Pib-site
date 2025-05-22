# Projeto Site PIB - Versão Completa com JSON Server

Este é o projeto completo do site da Primeira Igreja Batista, desenvolvido com React, TypeScript, Styled-components e integrado com uma API simulada utilizando JSON Server.

## Funcionalidades Implementadas:

-   **Estrutura Completa:** Header, Footer, e sistema de rotas configurados.
-   **Páginas Principais:**
    -   Home: Com carrossel de eventos, seção de programação, espaço para cultos ao vivo do YouTube e área de contribuição.
    -   PIB (Sobre Nós): Com seções de história, crenças, missão, visão e valores (conteúdo placeholder).
    -   Ministérios: Lista de ministérios e páginas individuais detalhadas para cada um.
    -   Eventos: Lista de eventos.
    -   Inscrições: Formulário para voluntariado nos ministérios.
    -   Cultos: Informações sobre horários e locais dos cultos.
    -   Mural da Piedade: Lista de pedidos de oração e formulário para novos pedidos.
    -   Contribua: Informações para doações (PIX, conta bancária).
    -   Login e Cadastro de Usuários.
-   **Integração com JSON Server:** Todas as páginas que lidam com dados dinâmicos (eventos, ministérios, mural, usuários, etc.) consomem dados de uma API REST simulada via JSON Server.
-   **Estilo e Responsividade:** Estilização baseada na identidade visual fornecida (logos e paleta de cores), com foco em responsividade para dispositivos móveis e animações de transição suaves. Todo o estilo é gerenciado via Styled-components, sem uso de `className`.
-   **Adequação LGPD:** Adicionada página de Política de Privacidade, Termos de Uso e um banner para consentimento de cookies. Os formulários de cadastro e contato incluem consentimento.
-   **Acessibilidade:** Considerações básicas de acessibilidade foram aplicadas (semântica HTML, roles, aria-labels onde aplicável, contraste de cores e navegação por teclado).

## Como Executar o Projeto

1.  **Descompacte o arquivo `pib-site-final.zip`** em um diretório de sua preferência.

2.  **Navegue até o diretório do projeto** pelo terminal:
    ```bash
    cd caminho/para/pib-site
    ```

3.  **Instale as dependências** do projeto utilizando o pnpm (certifique-se de ter o Node.js e o pnpm instalados globalmente):
    ```bash
    pnpm install
    ```

4.  **Inicie o JSON Server** (API simulada) em um terminal separado:
    ```bash
    pnpm run server
    ```
    O JSON Server estará rodando em `http://localhost:3001`.

5.  **Inicie o servidor de desenvolvimento do React** em outro terminal:
    ```bash
    pnpm run dev
    ```

6.  Abra o navegador e acesse `http://localhost:5173` (ou a porta indicada no terminal do `pnpm run dev`) para visualizar o site.

## Observações

-   Este projeto utiliza uma API simulada com JSON Server. Para um ambiente de produção, será necessário substituir as chamadas ao JSON Server por chamadas a um backend real e um banco de dados.
-   As senhas dos usuários no `db.json` estão em texto plano para fins de simulação. Em um ambiente real, elas devem ser devidamente criptografadas.
-   As imagens e alguns textos ainda são placeholders e podem ser substituídos conforme o conteúdo final é fornecido.

Fique à vontade para explorar o site e fornecer seu feedback!

