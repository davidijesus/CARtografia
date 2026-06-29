import React from 'react';
import StatusBadge from '../ui/StatusBadge';

export default function SufficiencyScore({index}) {
  return (
    <div className="section-card score-card">
      <div className="score-ring">
        <div style={{textAlign: 'center'}}>
          <div className="score-value">{index.score}/100</div>
          <div className="metric-note">Índice</div>
        </div>
      </div>
      <div>
        <h2 className="section-title">Índice de Suficiência Cartográfica</h2>
        <div className="button-row" style={{marginBottom: 10}}>
          <StatusBadge tone="status-red">{index.status}</StatusBadge>
          <StatusBadge tone="status-blue">Módulo acoplado ao SiCAR</StatusBadge>
        </div>
        <p className="section-copy">
          Antes de decidir, a CARtografia pergunta se a base é suficiente para decisão.
        </p>
        <div className="notice warning">
          Recomendação: gerar Kit de Atualização Cartográfica para validar hidrografia na área indicada.
        </div>
      </div>
    </div>
  );
}
