export const sufficiencyIndex = {
  caseId: 'CAR-BA-000184',
  score: 42,
  status: 'Insuficiente para decisão segura',
  recommendation: 'Gerar Kit de Atualização Cartográfica',
  evaluatedLayers: [
    {
      name: 'Base SiCAR 2024',
      status: 'Defasada',
      tone: 'status-red',
      detail: 'Hidrografia oficial pode não refletir o curso atual.',
    },
    {
      name: 'Evidência recente 2026',
      status: 'Boa leitura',
      tone: 'status-green',
      detail: 'Imagem recente sustenta comparação visual da feição.',
    },
    {
      name: 'Hidrografia declarada',
      status: 'Divergente',
      tone: 'status-yellow',
      detail: 'Traçado informado difere da referência sugerida.',
    },
    {
      name: 'APP potencial',
      status: 'Sensível',
      tone: 'status-red',
      detail: 'Mudança de geometria altera a área afetada.',
    },
  ],
  criteria: [
    {
      label: 'Atualidade da base de referência',
      status: 'Baixa',
      score: 20,
      explanation: 'Base de referência de 2024 pode não refletir sinais recentes.',
    },
    {
      label: 'Concordância entre fontes',
      status: 'Média',
      score: 55,
      explanation: 'Fontes apontam divergência parcial na hidrografia.',
    },
    {
      label: 'Qualidade da imagem recente',
      status: 'Alta',
      score: 82,
      explanation: 'Imagem recente permite identificar possível deslocamento de feição.',
    },
    {
      label: 'Impacto potencial em APP',
      status: 'Alto',
      score: 88,
      explanation: 'A divergência incide sobre área sensível para análise de APP.',
    },
    {
      label: 'Necessidade de campo',
      status: 'Provável',
      score: 35,
      explanation:
        'É recomendado confirmar a geometria de hidrografia com evidência territorial.',
    },
  ],
};

export const dossier = {
  id: 'DOSS-000184',
  caseId: 'CAR-BA-000184',
  divergenceType: 'Hidrografia / APP',
  affectedAreaHa: 18.4,
  impactedProperties: 37,
  comparedSources: [
    'Base SiCAR',
    'Base estadual',
    'Imagem recente',
    'Referência pública simulada',
  ],
  sufficiencyResult: 'Insuficiente para decisão final',
  recommendation: 'Abrir Kit de Atualização Cartográfica',
  editableDraft:
    'Foi identificada divergência cartográfica em camada de hidrografia com possível impacto sobre APP no caso CAR-BA-000184. A evidência disponível indica inconsistência entre a base de referência e sinais geoespaciais recentes, mas a suficiência cartográfica é baixa para decisão final. Recomenda-se abertura de Kit de Atualização Cartográfica para validação da geometria da hidrografia na área indicada.',
};

export const updateKit = {
  id: 'KIT-000184',
  caseId: 'CAR-BA-000184',
  title: 'Kit de Atualização Cartográfica — Hidrografia / APP',
  diagnosis: 'Base de referência possivelmente defasada para decisão segura.',
  scope:
    'Validar geometria de curso d’água e atualizar camada vetorial se confirmada a divergência.',
  fieldPoints: [
    'Ponto 1: possível deslocamento do curso d’água',
    'Ponto 2: baixa concordância entre fontes',
    'Ponto 3: amostra de controle',
  ],
  evidencePlan: [
    'Foto georreferenciada',
    'Ponto no mapa',
    'Observação técnica',
    'Drone opcional',
  ],
  tor: {
    object:
      'Validação e atualização de camada de hidrografia em recorte geoespacial prioritário.',
    deliverables: ['Arquivo vetorial', 'Metadados', 'Relatório técnico', 'Registro de evidências'],
    acceptedFormats: ['GeoJSON', 'GeoPackage', 'Shapefile', 'PDF técnico'],
    acceptanceCriteria: ['Completude', 'Consistência geométrica', 'Metadados', 'Rastreabilidade'],
  },
};

export const protocol = {
  id: 'GEO-2026-000184',
  caseId: 'CAR-BA-000184',
  recipient: 'Núcleo de Geoprocessamento Estadual',
  type: 'Validação cartográfica',
  priority: 'Alta',
  suggestedSla: '10 dias úteis',
  status: 'Aguardando aceite',
  attachments: ['DOSS-000184', 'KIT-000184'],
  timeline: [
    'Kit gerado',
    'Núcleo de geoprocessamento notificado',
    'Aguardando aceite',
    'Validação em campo',
    'QA técnico',
    'Retorno ao SiCAR',
  ],
};
