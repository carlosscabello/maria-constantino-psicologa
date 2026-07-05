# Site — Maria Aparecida Constantino | Psicóloga

Site institucional de uma página (one-page) para a psicóloga clínica
Maria Aparecida Constantino, desenvolvido em HTML, CSS e JavaScript puros
(sem frameworks), pronto para hospedagem gratuita no GitHub Pages.

## Estrutura de pastas

```
maria-constantino-psicologa/
├── index.html                  → Página única do site (todas as seções)
├── README.md                   → Este arquivo
├── .gitignore
├── assets/
│   ├── css/
│   │   └── style.css           → Todo o estilo visual (cores, fontes, layout)
│   ├── js/
│   │   └── script.js           → Menu mobile, animações e envio do formulário
│   └── img/
│       ├── maria-hero.jpg           → Foto de destaque (versão editada)
│       ├── maria-sobre.jpg          → Foto da seção "Sobre mim" (versão editada)
│       ├── maria-hero-original.jpg  → Foto original, guardada como backup
│       └── maria-sobre-original.jpg → Foto original, guardada como backup
└── docs/
    └── esboco-referencia.jpg   → Esboço aprovado, guardado como referência
```

## Itens que precisam da informação real da Dra. Maria antes de publicar

O esboço não continha estes dados, então usei valores de exemplo que
**precisam ser substituídos** em `index.html` (busque pelo texto exato):

| O que | Onde aparece | Texto de exemplo usado |
|---|---|---|
| Número do CRP | Seção "Sobre" e rodapé | `CRP 00/000000` |
| WhatsApp | Botões "Agende sua consulta" e seção Contato | `55 00 00000-0000` / link `wa.me/5500000000000` |
| E-mail | Seção Contato | `contato@mariaconstantino.com.br` |
| Endereço | Seção Contato | `Rua Exemplo, 123 — Bairro, Cidade/UF` |
| Horário de atendimento | Seção Contato | `Segunda a sexta, das 8h às 19h` |
| Instagram | Ícones sociais | link genérico `instagram.com/` |
| Formulário de contato | Seção Contato | ação do formulário aponta para `SEU_ID_AQUI` do Formspree (ver guia de publicação) |

Basta abrir `index.html` num editor de texto, usar Ctrl+F para localizar
cada trecho acima e substituir pelo dado real.

## Paleta de cores

Extraída e refinada a partir do próprio esboço aprovado:

| Uso | Cor | Hex |
|---|---|---|
| Fundo principal | Creme | `#F7F4EF` |
| Fundo alternado das seções | Creme escuro | `#EFE8DB` |
| Bordas / divisores | Areia | `#CABDAD` |
| Superfícies / cartões | Areia clara | `#E4DBCC` |
| Apoio / textos secundários | Oliva | `#9C9C84` |
| Botões e links (cor de ação) | Oliva escuro | `#6E6E52` |
| Texto principal | Marrom-tinta | `#3F3A33` |

Todas as cores estão centralizadas em variáveis CSS no topo de
`assets/css/style.css` (bloco `:root`) — para trocar qualquer tom do site,
basta alterar o valor ali uma única vez.

## Tipografia

- **Fraunces** (serifada) — títulos e nome/logo. Transmite acolhimento e
  personalidade sem perder a seriedade profissional.
- **Karla** (sem serifa) — textos, menu, formulário e botões. Boa leitura em
  telas pequenas.

Ambas são carregadas gratuitamente via Google Fonts no `<head>` do
`index.html`.

## Formulário de contato

O GitHub Pages hospeda apenas arquivos estáticos (não roda servidor), então
o formulário usa o serviço gratuito **Formspree** para receber as mensagens
por e-mail. O passo a passo de configuração está no guia
`GUIA-HOSPEDAGEM-GITHUB.docx`.

## Testando localmente

Não é necessário instalar nada. Basta abrir o arquivo `index.html`
diretamente no navegador, ou, para simular melhor o ambiente real, rodar um
servidor local simples:

```bash
# dentro da pasta do projeto
python3 -m http.server 8000
# depois acesse http://localhost:8000 no navegador
```

## Créditos

Fotos: fornecidas pela cliente (versões editadas usadas como principais;
versões originais mantidas em `assets/img/` como backup).
