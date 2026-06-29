import React from 'react';
import StatusBadge from '../ui/StatusBadge';

function toneForStatus(status) {
  if (status === 'Alta' || status === 'Alto') {
    return 'status-green';
  }
  if (status === 'Baixa' || status === 'Provável') {
    return 'status-red';
  }
  return 'status-yellow';
}

export default function SufficiencyCriteriaTable({criteria}) {
  return (
    <div className="criteria-grid">
      {criteria.map((criterion) => (
        <article className="criterion" key={criterion.label}>
          <div>
            <strong>{criterion.label}</strong>
            <p className="section-copy" style={{margin: '6px 0 0'}}>
              {criterion.explanation}
            </p>
            <div className="bar">
              <span style={{width: `${criterion.score}%`}} />
            </div>
          </div>
          <div style={{textAlign: 'right'}}>
            <StatusBadge tone={toneForStatus(criterion.status)}>{criterion.status}</StatusBadge>
            <div className="metric-note" style={{marginTop: 8}}>
              {criterion.score}/100
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
