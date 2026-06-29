---
title: Dossiê CARtográfico
sidebar_label: Dossiê CARtográfico
description: Artefato técnico de decisão gerado pela CARtografia quando há evidência suficiente.
slug: /business-plan/dossie-cartografico
---

# Dossiê CARtográfico

O Dossiê CARtográfico é o artefato técnico gerado quando a evidência disponível é suficiente ou quase suficiente para decisão. Ele não é uma exportação de dashboard. É um pacote revisável, rastreável e compreensível que evita que Luana reconstrua manualmente a evidência em várias abas.

## Quando é gerado

O dossiê é gerado quando o Índice de Suficiência Cartográfica retorna:

- Suficiente para decisão.
- Suficiente com revisão rápida.
- Suficiente com alerta de sensibilidade ambiental, exigindo atenção humana explícita.

## Campos do dossiê

| Bloco | Conteúdo |
| --- | --- |
| Identificação territorial | Estado, município, área analisada, código CAR quando disponível, área total, área afetada e coordenadas. |
| Mudança ou inconsistência | Classe anterior, classe sugerida, período comparado, magnitude e impacto territorial estimado. |
| Comparação visual | Imagem/base anterior, imagem/base atual, sobreposição de camadas e recorte do mapa. |
| Camadas afetadas | APP, Reserva Legal, remanescente, área consolidada, uso restrito, hidrografia, relevo e sobreposição. |
| Fontes utilizadas | Bases oficiais, bases públicas, imagens, séries históricas, MapBiomas, INPE/Brazil Data Cube, SNIF, bases estaduais e dados de campo. |
| Resultado do índice | Status, justificativa, fatores que aumentam confiança, fatores que reduzem confiança e recomendação. |
| Minuta técnica | Parecer, justificativa, solicitação de revisão, registro de decisão ou encaminhamento. |

## Como Luana usa

Luana revisa o dossiê, confere a justificativa do índice, ajusta a minuta técnica e registra sua decisão. O dossiê reduz o trabalho repetitivo, mas não remove a responsabilidade técnica. Cada campo deve ser editável ou verificável.

## Exemplo fictício

| Campo | Exemplo |
| --- | --- |
| Caso | CAR-EXEMPLO-0001 |
| Município | Município fictício no Pará |
| Camada sensível | APP de curso d'água |
| Área afetada | Hipótese de 3,4 ha a validar no piloto |
| Classe anterior | Vegetação nativa |
| Classe observada | Solo exposto em recorte recente |
| Fontes | Camada estadual autorizada, imagem Sentinel-2, MapBiomas e histórico do caso |
| Suficiência | Suficiente com revisão rápida |
| Fatores de confiança | Fontes convergentes e imagem sem nuvens no recorte |
| Fatores de alerta | Proximidade de APP exige revisão humana |
| Recomendação | Revisar o recorte, confirmar hidrografia e emitir parecer com ressalva |

## Minuta técnica fictícia

> Com base na comparação entre a base de referência informada, a imagem orbital recente e as camadas ambientais disponíveis, observa-se alteração compatível com mudança de cobertura no recorte analisado. O Índice de Suficiência Cartográfica indicou suficiência com revisão rápida, em razão da convergência entre fontes e da proximidade de APP. Recomenda-se revisão técnica humana do limite da APP e registro da decisão no fluxo oficial do SiCAR.

## Como evita caixa-preta

O dossiê separa evidência, inferência e recomendação. A analista consegue ver quais fontes foram usadas, qual versão de base entrou no cálculo, quais critérios reduziram confiança e qual trecho da minuta foi sugerido automaticamente.
