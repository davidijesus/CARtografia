---
title: Riscos
sidebar_label: Riscos
description: Matriz de riscos técnicos, jurídicos, financeiros, institucionais e de adoção.
slug: /business-plan/riscos
---

# Riscos

A CARtografia precisa explicitar riscos para ser crível. O objetivo não é vender uma solução sem fricção, mas mostrar que a equipe entende as dependências técnicas, jurídicas e institucionais.

| Risco | Probabilidade | Impacto | Mitigação | Responsável | Fase |
| --- | --- | --- | --- | --- | --- |
| Dados insuficientes ou desatualizados | Alta | Alto | Começar com camada prioritária e status de insuficiência explícito. | Geoprocessamento | MVP e piloto |
| Índice visto como caixa-preta | Média | Alto | Regras explicáveis, fatores de confiança e revisão humana. | Produto e analistas | MVP |
| Promessa de substituição do SiCAR | Baixa | Alto | Reforçar acoplamento e retorno ao fluxo oficial. | Equipe do projeto | Todas |
| Exposição de dados pessoais | Média | Alto | LGPD, minimização, anonimização no piloto e controle de acesso. | Segurança e jurídico | Piloto |
| Kit interpretado como atalho de licitação | Média | Alto | Cautelas claras e validação jurídica estadual. | Jurídico | Piloto |
| Baixa adesão das analistas | Média | Alto | Co-criação, UX simples e medição de tempo economizado. | Produto | MVP e piloto |
| Geoprocessamento rejeita Kits | Média | Médio | Critérios de aceite construídos com equipe técnica. | Geoprocessamento | Piloto |
| Integração com SiCAR demora | Alta | Médio | Simulação, integração leve e roadmap incremental. | Arquitetura | Pós-MVP |
| Customizações estaduais fragmentam o produto | Média | Médio | Núcleo comum, templates configuráveis e governança. | Comitê | Multiestado |
| Custo de processamento cresce | Média | Médio | Cache, processamento por lote e retenção de dados. | Engenharia | Beta |
| Dependência de fornecedor | Média | Alto | Código aberto, formatos abertos e documentação. | Governança | Todas |
| Falta de financiamento recorrente | Média | Alto | Modelo misto de grants, suporte, implantação e consórcio. | Gestão | Pós-piloto |
| Modelo de IA enviesado ou impreciso | Média | Alto | Validação humana, métricas de erro e não uso para decisão automática. | Dados e produto | Beta |
| Evidência de campo inconsistente | Média | Médio | Checklist, metadados, georreferenciamento e QA. | Campo | Piloto |
| Resistência institucional | Média | Alto | Patrocínio estadual, métricas e escopo reduzido. | Gestão | Piloto |

## Risco mais importante

O maior risco estratégico é a solução ser percebida como mais uma plataforma paralela. Toda a documentação, arquitetura e apresentação devem insistir: a CARtografia é uma camada complementar de suficiência cartográfica para a análise semiautomática do SiCAR.

## Mitigação transversal

Revisão humana, rastreabilidade, formatos abertos, integração incremental e cautela jurídica são as defesas centrais da proposta.
