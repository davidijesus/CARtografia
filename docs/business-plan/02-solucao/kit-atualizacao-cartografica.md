---
title: Kit de Atualização Cartográfica
sidebar_label: Kit de atualização
description: Pacote técnico acionável gerado quando a evidência cartográfica é insuficiente.
slug: /business-plan/kit-atualizacao-cartografica
---

# Kit de Atualização Cartográfica

O Kit de Atualização Cartográfica é gerado quando o Índice de Suficiência Cartográfica indica que a base atual não é suficiente para uma decisão segura. Ele é o principal artefato de acionamento da CARtografia.

O Kit não resolve licitação automaticamente e não cria atalho jurídico. Sua função é encurtar o tempo técnico anterior ao processo formal, transformando uma dúvida cartográfica em demanda instruída para geoprocessamento, campo, drone, contratação, cooperação técnica ou atualização de base.

:::caution Limite jurídico
O Kit prepara o processo para começar melhor, com escopo, evidência, área, justificativa e critérios técnicos. Ele não substitui o rito contratual, a análise jurídica nem a decisão administrativa.
:::

## Quando é gerado

| Situação | Motivo do Kit | Encaminhamento típico |
| --- | --- | --- |
| Base defasada | A camada de referência não representa o estado atual do território. | Atualização estadual ou cooperação técnica. |
| Divergência entre fontes | Mapas e imagens indicam leituras incompatíveis. | Geoprocessamento ou revisão especializada. |
| Baixa qualidade de imagem | Nuvem, sombra ou resolução impedem conclusão. | Nova imagem, mosaico ou levantamento. |
| Necessidade de campo | Sensoriamento remoto não resolve a dúvida. | Vistoria, foto georreferenciada ou drone. |
| Conflito geométrico | Polígonos se sobrepõem ou estão deslocados. | Correção topológica e QA. |
| Dependência institucional | A atualização exige outro setor ou contratação. | Canal institucional com dono e SLA. |

## Blocos do Kit

| Bloco | Conteúdo |
| --- | --- |
| Acionamento | Identificador, camada afetada, município, estado, pendência, criticidade, responsável sugerido, SLA e status. |
| Diagnóstico técnico | Recorte geográfico, polígono, área afetada, classes envolvidas, fontes, metadados e justificativa de insuficiência. |
| Amostragem e verificação | Pontos sugeridos para campo, prioridade, objetivo da verificação, checklist e evidência esperada. |
| Preparação para execução | Minuta de termo de referência, objeto, justificativa, entregáveis, precisão esperada, cronograma e anexos. |
| Plano de voo de drone | Área de voo, GSD desejado, altura sugerida, sobreposição, pontos de controle, janelas e arquivos esperados. |
| Aceite e QA | Conformidade, completude, qualidade geométrica, consistência semântica, rastreabilidade e tolerâncias. |
| Decisão/publicação | Minuta de despacho, status do caso, versão da base, changelog e registro de decisão humana. |

## Como evita virar PDF solto

O Kit precisa existir como objeto operacional: metadados estruturados, status, dono, histórico e integração com protocolo ou service desk. O PDF pode ser uma representação do Kit, mas não deve ser o único formato. A versão recomendada combina JSON de metadados, anexos geoespaciais, visualização HTML e documento exportável.

## Exemplo fictício de Kit

| Campo | Exemplo |
| --- | --- |
| Identificador | KIT-CAR-PA-0007 |
| Camada afetada | Hidrografia e APP |
| Município | Município fictício no Pará |
| Pendência | Base estadual de hidrografia não condiz com imagem recente |
| Criticidade | Alta, por impacto em análise de APP |
| Motivo | Índice insuficiente por divergência entre fontes e possível deslocamento geométrico |
| Próximo responsável sugerido | Equipe estadual de geoprocessamento |
| SLA sugerido | Hipótese a validar com o órgão estadual |
| Entregáveis esperados | Camada corrigida, metadados, relatório de QA e registro de versão |
| Critério de aceite | Geometria sem sobreposição inválida, metadados completos e justificativa técnica registrada |

## Plano de voo quando aplicável

O plano de voo deve ser opcional e proporcional. Em casos nos quais a dúvida pode ser resolvida por imagem orbital ou base pública, não faz sentido acionar drone. Quando necessário, o Kit sugere área, objetivo, GSD desejado, sobreposição frontal e lateral, pontos de controle, janela de voo e padrão de entrega.

## Conexão com o canal institucional

O Kit ganha valor quando chega ao ator certo. Por isso ele deve abrir ou alimentar uma demanda com protocolo, dono, prazo, status, anexos e histórico. A CARtografia deve permitir acompanhar se o Kit foi aceito, devolvido, complementado, executado ou encerrado.
