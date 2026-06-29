---
title: Operação e Governança
sidebar_label: Operação e governança
description: Papéis, responsabilidades e governança aberta para operação da CARtografia.
slug: /business-plan/operacao-governanca
---

# Operação e Governança

A CARtografia precisa de governança para não virar apenas ferramenta técnica. A operação envolve quem administra, valida, publica, audita, mantém modelos, atualiza conectores, cuida do canal e responde pelos Kits.

## Papéis operacionais

| Papel | Responsabilidade |
| --- | --- |
| Administrador estadual | Configura usuários, camadas, filas, prazos e integrações locais. |
| Analista ambiental | Revisa dossiês, decide, ajusta minutas e registra justificativa. |
| Geoprocessamento | Valida critérios técnicos, atualiza camadas e executa QA. |
| Campo | Coleta evidência georreferenciada e responde checklists. |
| Compras/jurídico | Avalia minutas, rito contratual, dados compartilháveis e riscos legais. |
| Gestão estadual | Prioriza camadas, acompanha métricas e remove gargalos institucionais. |
| Governo federal/SiCAR | Define padrões de interoperabilidade, segurança e acoplamento. |
| Mantenedores open source | Revisam código, documentação, releases e contribuições. |
| Comitê de governança | Decide roadmap, critérios comuns e política de contribuição. |

## RACI resumido

| Atividade | Responsável | Aprovador | Consultado | Informado |
| --- | --- | --- | --- | --- |
| Revisar dossiê | Analista | Órgão estadual | Geoprocessamento | Gestão |
| Abrir Kit | CARtografia + analista | Analista | Geoprocessamento | Gestão |
| Atualizar camada | Geoprocessamento | Gestão estadual | Campo | Analistas |
| Preparar contratação | Compras/jurídico | Autoridade competente | Área técnica | Gestão |
| Publicar conector | Mantenedores | Comitê | Estados e SiCAR | Comunidade |
| Alterar pesos do índice | Área técnica | Comitê estadual | Analistas | Usuários |

## Como estados adaptam

Cada estado pode configurar camadas prioritárias, critérios de criticidade, SLAs, templates e responsáveis. O núcleo comum deve preservar modelos de dados, logs, conectores e documentação, para que adaptações locais não quebrem interoperabilidade.

## Como a comunidade contribui

Contribuições devem entrar por issues, pull requests, documentação de decisão técnica e testes. O projeto precisa manter guia de contribuição, licença aberta, roadmap público, lista de conectores e política de release.

## Como evitar vendor lock-in

- Código aberto e licença permissiva ou copyleft compatível com governo.
- Exportação em formatos abertos.
- Documentação de APIs e eventos.
- Dados com metadados e versionamento.
- Separação entre núcleo comum e customizações estaduais.
- Governança de manutenção com mais de um ator institucional.
