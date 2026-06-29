module.exports = {
  businessPlan: [
    {
      type: 'category',
      label: 'Business Plan',
      link: {
        type: 'doc',
        id: 'business-plan/visao-geral/index',
      },
      items: [
        {
          type: 'category',
          label: 'Comece aqui',
          items: [
            'business-plan/visao-geral/resumo-executivo',
            'business-plan/visao-geral/index',
            'business-plan/visao-geral/pitch',
          ],
        },
        {
          type: 'category',
          label: 'Problema e valor',
          items: [
            'business-plan/contexto/problema-oportunidade',
            'business-plan/contexto/personas-stakeholders',
            'business-plan/contexto/proposta-valor',
            'business-plan/contexto/benchmarkings',
            'business-plan/contexto/analise-competitiva',
          ],
        },
        {
          type: 'category',
          label: 'Solução inicial',
          items: [
            'business-plan/solucao/produto-funcionamento',
            'business-plan/solucao/suficiencia-cartografica',
            'business-plan/solucao/dossie-cartografico',
            'business-plan/solucao/kit-atualizacao-cartografica',
            'business-plan/solucao/canal-acionamento',
          ],
        },
        {
          type: 'category',
          label: 'Integração e operação',
          items: [
            'business-plan/integracao-operacao/acoplamento-sicar',
            'business-plan/integracao-operacao/operacao-governanca',
            'business-plan/integracao-operacao/recomendacao-contratual',
            'business-plan/integracao-operacao/viabilidade',
          ],
        },
        {
          type: 'category',
          label: 'Adoção e sustentabilidade',
          items: [
            'business-plan/adocao-sustentabilidade/go-to-market',
            'business-plan/adocao-sustentabilidade/modelo-negocios',
            'business-plan/adocao-sustentabilidade/plano-financeiro',
            'business-plan/adocao-sustentabilidade/parcerias',
            'business-plan/adocao-sustentabilidade/metricas-impacto',
            'business-plan/adocao-sustentabilidade/roadmap',
          ],
        },
        {
          type: 'category',
          label: 'Riscos e referências',
          items: [
            'business-plan/riscos-referencias/riscos',
            'business-plan/riscos-referencias/glossario',
          ],
        },
      ],
    },
  ],
};
