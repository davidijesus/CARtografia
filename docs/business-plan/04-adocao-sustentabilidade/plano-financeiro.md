---
title: Plano Financeiro
sidebar_label: Plano financeiro
description: Estrutura de custos e cenários financeiros com hipóteses explícitas.
slug: /business-plan/plano-financeiro
---

# Plano Financeiro

O plano financeiro da CARtografia deve ser tratado como hipótese de trabalho até a realização de piloto. Sem dados reais de volume, infraestrutura e esforço de integração, qualquer número fechado seria especulativo. A documentação deve mostrar estrutura de custos, alavancas e cenários.

## Estrutura de custos

| Categoria | Itens incluídos | Observação |
| --- | --- | --- |
| Desenvolvimento | Produto, frontend, backend, geoprocessamento, testes e documentação. | Maior peso no MVP. |
| Infraestrutura | Hospedagem, banco, filas, autenticação e observabilidade. | Cresce com volume de casos. |
| Armazenamento | Imagens, recortes, anexos, dossiês, kits e logs. | Exige política de retenção. |
| Processamento geoespacial | Comparação de camadas, mosaicos, séries temporais e QA. | Pode ser otimizado por cache e processamento por lote. |
| Equipe | Produto, engenharia, geotecnologia, UX, jurídico fracionário e suporte. | Deve escalar por fase. |
| Implantação | Configuração estadual, conectores e treinamento. | Variável por maturidade do estado. |
| Capacitação | Oficinas para analistas, geoprocessamento, campo e gestão. | Essencial para adoção. |
| Validação em campo | Vistorias, drone, deslocamento e equipamentos. | Não ocorre em todos os casos. |
| Governança open source | Releases, revisão de contribuições, documentação e comunidade. | Evita abandono do bem público digital. |
| Integração com SiCAR | APIs, segurança, logs, homologação e suporte institucional. | Fase posterior ao piloto. |
| Canal institucional | Service desk, webhooks, status e auditoria. | Reduz retrabalho intersetorial. |
| Suporte jurídico/contratual | Validação de minutas, LGPD e contratação pública. | Fracionário, mas crítico. |

## Cenários

| Cenário | Escopo | Hipóteses de custo | Risco financeiro |
| --- | --- | --- | --- |
| Hackathon/MVP | Docs, protótipo, dados simulados, índice inicial, dossiê e kit fictícios. | Baixo a médio, concentrado em equipe. | Baixo impacto se não avançar, mas risco de protótipo superficial. |
| Piloto estadual | Uma camada prioritária, casos anonimizados, integração leve e canal mínimo. | Médio, com implantação, capacitação e processamento. | Subestimar esforço de dados e alinhamento institucional. |
| Escala multiestado | Conectores, governança, suporte, hospedagem opcional e customizações. | Médio a alto, distribuído entre estados e mantenedores. | Customizações excessivas e custos recorrentes sem financiamento. |

## Alavancas de redução de custo

1. Começar com uma camada prioritária.
2. Usar dados públicos e casos anonimizados no MVP.
3. Evitar processamento bruto quando metadados já indicam insuficiência.
4. Reutilizar conectores e templates entre estados.
5. Manter núcleo comum aberto.
6. Separar hospedagem opcional do código público.

## Fontes de financiamento possíveis

- Grants de inovação pública e clima.
- Cooperação internacional.
- Consórcios estaduais.
- Contratos de implantação assistida.
- Suporte e manutenção.
- Capacitação.
- Projetos com universidades e organismos multilaterais.

## O que validar no piloto

O piloto deve estimar custo por caso processado, custo por Kit aceito, custo por dossiê revisado, custo de infraestrutura por volume e custo de manutenção de conectores. Esses dados sustentam negociação com estados e financiadores.
