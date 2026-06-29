import React from 'react';
import {getDashboardMetrics} from '../../services/sicarMockService';
import MetricCard from '../ui/MetricCard';
import PrimaryButton from '../ui/PrimaryButton';
import SectionCard from '../ui/SectionCard';

function formatNumber(value) {
  return new Intl.NumberFormat('pt-BR').format(value);
}

export default function SicarDashboard() {
  const metrics = getDashboardMetrics();

  return (
    <div className="grid">
      <div className="notice">
        A automação processa grandes volumes. O gargalo aparece nos casos semiautomáticos que
        exigem convicção cartográfica.
      </div>
      <div className="grid metrics">
        <MetricCard label="Análises automatizadas hoje" value={formatNumber(metrics.automatedProcessedToday)} />
        <MetricCard label="Resolvidas automaticamente" value={formatNumber(metrics.automatedResolvedToday)} />
        <MetricCard label="Fila semiautomática" value={formatNumber(metrics.semiAutomaticQueue)} />
        <MetricCard label="Baixa suficiência cartográfica" value={formatNumber(metrics.lowCartographicSufficiency)} />
        <MetricCard label="Tempo em casos complexos" value={metrics.estimatedComplexCaseTime} />
        <MetricCard label="Bases externas consultadas" value={metrics.externalSourcesUsuallyConsulted} />
      </div>
      <SectionCard
        title="Ponto de entrada da CARtografia"
        copy="A CARtografia destrava os casos que exigem convicção cartográfica."
        actions={<PrimaryButton to="/sicar/analises">Abrir fila semiautomática</PrimaryButton>}
      >
        <div className="flow-strip">
          {['Automação SiCAR', 'Análise semiautomática', 'Suficiência', 'Dossiê ou Kit', 'Retorno ao SiCAR'].map(
            (step, index) => (
              <div className="flow-step" key={step}>
                <div className="flow-number">{index + 1}</div>
                <strong>{step}</strong>
                <span className="metric-note">Etapa demonstrativa</span>
              </div>
            ),
          )}
        </div>
      </SectionCard>
    </div>
  );
}
