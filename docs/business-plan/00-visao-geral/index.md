---
title: Visão Geral do Negócio
sidebar_label: Visão geral
description: Business plan da CARtografia para o Desafio 2 do haCARthon.
slug: /business-plan
---

# Visão Geral do Negócio

<p align="center">
  <img src={require('@site/static/img/cartografia-logo.png').default} alt="Logo CARtografia" width="520" />
</p>

A CARtografia é uma camada acoplável ao SiCAR que entra onde a automação para: avalia se há suficiência cartográfica para decisão, gera dossiês técnicos quando a evidência é suficiente e prepara kits de atualização cartográfica quando a base precisa ser validada, contratada ou atualizada.

O foco da solução é o Desafio 2 do haCARthon: melhorar o acesso a dados geoespaciais do CAR. A proposta não substitui o SiCAR, a análise dinamizada já existente nem o trabalho das analistas estaduais. Ela organiza o trecho mais custoso do fluxo: os casos que caem na análise semiautomática, quando a decisão pública depende de evidência geoespacial atual, confiável e bem instruída.

:::info Posicionamento central
A CARtografia não tenta substituir o que o SiCAR já automatiza. Ela resolve o gargalo dos casos que caem na análise semiautomática, quando a decisão depende de bases geoespaciais mais atuais, confiáveis e bem instruídas.
:::

## Elevator pitch

A CARtografia transforma casos semiautomáticos do SiCAR em decisões seguras ou demandas prontas de atualização cartográfica. Quando há evidência suficiente, entrega um Dossiê CARtográfico revisável para a analista ambiental. Quando não há, estrutura um Kit de Atualização Cartográfica com escopo, recorte, justificativa, critérios de aceite e canal de acionamento institucional.

O problema não é apenas ter um mapa atualizado. O problema é reduzir o tempo entre uma dúvida cartográfica e uma decisão pública segura.

## Público-alvo

A usuária principal é Luana, analista ambiental estadual responsável por analisar, validar, corrigir ou priorizar cadastros do CAR. Ela lida com filas, bases defasadas, múltiplos sistemas, sobreposições difíceis e necessidade de justificar tecnicamente cada decisão.

O beneficiário indireto é Seu Raimundo, pequeno ou médio produtor rural. Ele não usa a primeira versão da plataforma diretamente, mas se beneficia de análises mais rápidas, notificações mais precisas, menos retrabalho e maior previsibilidade no processo de regularização ambiental.

## Quatro componentes centrais

| Componente | Função | Saída operacional |
| --- | --- | --- |
| Índice de Suficiência Cartográfica | Avalia se a base disponível é atual, confiável e completa o bastante para apoiar decisão. | Status de suficiência, justificativa e recomendação. |
| Dossiê CARtográfico | Organiza evidências quando a suficiência é alta ou quase suficiente. | Artefato técnico revisável para parecer, despacho ou encaminhamento. |
| Kit de Atualização Cartográfica | Estrutura uma demanda quando a base não é suficiente. | Pacote técnico com diagnóstico, amostragem, termo de referência, QA e plano de ação. |
| Canal de Acionamento Institucional | Encaminha dossiês e kits com dono, SLA, protocolo e histórico. | Demanda rastreável para geoprocessamento, campo, compras, jurídico ou gestão. |

## Como se acopla ao SiCAR

A CARtografia atua como módulo complementar. Ela recebe casos, camadas, eventos ou recortes vindos do SiCAR em ambiente autorizado, executa uma triagem cartográfica, gera artefatos técnicos e devolve status, evidências, anexos e histórico para a fila institucional.

O acoplamento pode evoluir por etapas: primeiro com simulação e importação controlada, depois com exportação padronizada, webhooks, APIs, fila de eventos e integração operacional com service desk estadual ou protocolo interno.

## Por que é Bem Público Digital

A CARtografia foi desenhada como infraestrutura digital aberta: código aberto, documentação pública, conectores reutilizáveis, formatos exportáveis e governança que evita aprisionamento tecnológico. O alinhamento com o conceito de Bem Público Digital depende de licenças abertas, documentação de dados, proteção de privacidade, interoperabilidade e aderência a leis aplicáveis, conforme o [Digital Public Goods Standard](https://www.digitalpublicgoods.net/standard).

## Sustentabilidade

O modelo recomendado combina implantação assistida, suporte, capacitação, manutenção de conectores, hospedagem gerenciada opcional, grants, cooperação internacional e consórcios públicos. O produto não deve ser vendido como SaaS fechado para governo; sua sustentabilidade vem de serviços, governança e evolução compartilhada do bem público digital.

## Próximos passos

1. Validar a narrativa com mentores do haCARthon e analistas estaduais.
2. Escolher uma camada prioritária para protótipo, como uso e cobertura do solo, APP, hidrografia ou Reserva Legal.
3. Simular o fluxo SiCAR -> suficiência -> dossiê ou kit -> canal institucional.
4. Medir tempo economizado em casos semiautomáticos fictícios ou anonimizados.
5. Definir arquitetura incremental de integração e critérios jurídicos mínimos.
