---
title: Protótipo CARtografia
description: Guia rápido do MVP navegável da CARtografia acoplado ao mock SiCAR.
slug: /prototipo-cartografia
---

# Protótipo CARtografia

<p align="center">
  <img src={require('@site/static/img/cartografia-logo.png').default} alt="Logo CARtografia" width="460" />
</p>

Este MVP é uma demonstração navegável da CARtografia como módulo acoplado ao SiCAR Demonstrativo. Ele foi criado para apoiar uma vídeo-demonstração curta, mostrando a passagem de um caso em análise semiautomática pelo Índice de Suficiência Cartográfica, Dossiê, Kit de Atualização, acionamento institucional e retorno ao SiCAR.

## Como rodar

```bash
npm install
npm run build
npm run serve
```

Para desenvolvimento:

```bash
npm run start
```

## Fluxo da demo

1. Acesse `/login`.
2. Entre como Luana Almeida.
3. Abra a visão geral do SiCAR.
4. Vá para a fila de análise semiautomática.
5. Abra o caso `CAR-BA-000184`.
6. Clique em `Avaliar com CARtografia`.
7. Veja o Índice de Suficiência Cartográfica `42/100`.
8. Veja o mapa comparativo com camadas simuladas.
9. Gere o Dossiê CARtográfico.
10. Gere o Kit de Atualização Cartográfica.
11. Abra o acionamento institucional.
12. Gere o protocolo `GEO-2026-000184`.
13. Retorne ao SiCAR e veja o caso atualizado.

## Rotas principais

- `/login`
- `/sicar`
- `/sicar/analises`
- `/sicar/analises/CAR-BA-000184`
- `/sicar/analises/CAR-BA-000184/cartografia`
- `/sicar/analises/CAR-BA-000184/cartografia/suficiencia`
- `/sicar/analises/CAR-BA-000184/cartografia/dossie`
- `/sicar/analises/CAR-BA-000184/cartografia/kit`
- `/sicar/analises/CAR-BA-000184/cartografia/acionamento`
- `/sicar/protocolos/GEO-2026-000184`
- `/evidencia/GEO-2026-000184`

## Dados mockados

Os dados ficam centralizados em:

- `src/data/mockSicar.js`
- `src/data/mockCartografia.js`

Os serviços simulados ficam em:

- `src/services/sicarMockService.js`
- `src/services/cartografiaMockService.js`
- `src/services/demoState.js`

Não há chamada real ao SiCAR, API pública, Keycloak, PostGIS, GeoServer ou serviço externo.

## Relação com SiCAR

O protótipo usa o SiCAR como referência visual e conceitual: sistema administrativo, cards limpos, verde institucional, azul geográfico, navegação interna, status, rastreabilidade e módulo geoespacial acoplado.

Para aproximar a tela de login da referência visual do CAR, o protótipo usa o logotipo gov.br disponibilizado pela Consulta Pública do CAR e uma marca institucional local com o texto oficial "CAR - Cadastro Ambiental Rural". Não há integração real com o SiCAR nesta versão.

Referências consultadas:

- https://www.car.gov.br/
- https://consulta.car.gov.br/
- https://cadastro.car.gov.br/

## O que é funcional

- Navegação entre rotas.
- Login demonstrativo.
- Fila de análise semiautomática.
- Abertura do caso principal.
- Cálculo mockado do Índice de Suficiência.
- Geração mockada de Dossiê.
- Geração mockada de Kit.
- Geração visual de protocolo.
- Retorno ao SiCAR com status atualizado.
- Portal mobile simplificado de evidência territorial.

## O que é simulado

- Autenticação.
- Cálculo geoespacial real.
- Integração com SiCAR.
- Abertura de protocolo em service desk.
- Upload de foto.
- Uso de localização.
- Persistência em banco.

## Próximos passos para acoplamento real

1. Validar o fluxo com analistas estaduais.
2. Definir camada prioritária para piloto.
3. Trocar dados mockados por casos anonimizados.
4. Definir contrato de API/eventos com o SiCAR.
5. Definir perfis de acesso, logs e retenção.
6. Integrar com serviço estadual de protocolo ou service desk.
7. Evoluir o mapa para Leaflet/GeoJSON real em ambiente autorizado.

:::caution
A CARtografia é um módulo complementar ao SiCAR. Ela não substitui o SiCAR, a análise humana, o rito jurídico ou a decisão institucional.
:::
