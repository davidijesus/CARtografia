# CARtografia

A CARtografia transforma mudanças no território em decisões técnicas rastreáveis para o CAR.

## Deploy

O site Docusaurus publica documentação e protótipo no mesmo GitHub Pages:

- Protótipo: `https://davidijesus.github.io/CARtografia/login/`
- Documentação: `https://davidijesus.github.io/CARtografia/docs/business-plan/`

O deploy publica o conteúdo gerado em `build/` na branch `gh-pages`.

```bash
npm run build
npx gh-pages -d build -b gh-pages --dotfiles
```

## Documentação

A documentação estratégica do business plan está em `docs/business-plan/` e usa Docusaurus/MDX.

O MVP navegável da CARtografia está disponível a partir da rota `/login`. O guia do protótipo está em `docs/prototipo-cartografia.md`.

```bash
npm install
npm run start
```

Para validar a build estática:

```bash
npm run build
```
