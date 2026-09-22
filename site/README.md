# Site promeneum.com

Site institucional do Promeneum Group. É um site estático: HTML, CSS e JavaScript, sem servidor nem base de dados. Está publicado com o GitHub Pages a partir da raiz do ramo `main`.

## Estrutura

| Ficheiro | Função |
|---|---|
| `index.html` | Todo o conteúdo do site, em português. Inclui a página da Hipérbole Pioneira, as fichas de projecto, o contacto e a política de privacidade. |
| `assets/app.js` | Comportamento: mudança de língua (o inglês está no dicionário `EN`), navegação, demonstrações e assistente de contacto. |
| `assets/config.js` | Destino dos pedidos de contacto. É o único ficheiro a alterar para ligar um webhook ou mudar a caixa de correio. |
| `assets/styles.css` | Estilos. Cores e tipos de letra estão definidos no início, em `:root`. |
| `assets/fonts/` | Caladea e Carlito (SIL Open Font License 1.1; as licenças estão na pasta). |
| `assets/favicon.svg`, `assets/og-image.png` | Ícone do separador e imagem de pré-visualização nas redes sociais. |
| `404.html`, `robots.txt`, `sitemap.xml` | Página de erro e ficheiros para motores de pesquisa. |
| `.nojekyll` | Diz ao GitHub Pages para publicar os ficheiros tal como estão. |
| `CNAME` | Criado pelo GitHub quando se define o domínio em Settings > Pages. **Não apagar.** |

## Alterar conteúdos

1. O texto em português está em `index.html`. Cada elemento traduzível tem um atributo `data-i18n="chave"`.
2. O texto em inglês da mesma chave está no objecto `EN`, no início de `assets/app.js`. Alterar sempre os dois.
3. A política de privacidade tem um bloco por língua em `index.html` (`data-only-lang="pt"` e `data-only-lang="en"`).
4. Os campos da política ainda por preencher estão assinalados no código com `<!-- PREENCHER -->`.
5. Depois do `commit` no ramo `main`, o GitHub publica a alteração. Pode demorar até 10 minutos.

## Pedidos de contacto

O assistente da página de contacto segue um guião fixo e só recolhe dados de contacto. Não usa modelos de inteligência artificial.

- `leadEndpoint` vazio em `assets/config.js`: o visitante envia o pedido a partir do seu próprio programa de e-mail, para `contactEmail`.
- `leadEndpoint` preenchido: o site envia o pedido por `POST` para esse endereço, como formulário (`application/x-www-form-urlencoded`), com os campos `nome`, `empresa`, `email`, `telefone`, `assunto`, `mensagem`, `lingua` e `origem`. O endereço tem de responder com um código 2xx e permitir pedidos com origem em `https://promeneum.com`.

O endereço do webhook fica visível no código do site. Quem o recebe deve validar os campos e limitar o volume de pedidos.

## Regras de conteúdo

- Os clientes são identificados apenas pelo sector. Não publicar nomes, imagens ou dados de clientes.
- As demonstrações usam dados sintéticos e correm no browser do visitante.
- O site não usa cookies, ferramentas de análise nem recursos de terceiros. Qualquer alteração a isto obriga a rever a política de privacidade.
