import React from 'react';

export default function MetricCard({label, value, note}) {
  return (
    <article className="metric-card br-card">
      <div className="metric-label">{label}</div>
      <div className="metric-value">{value}</div>
      {note ? <div className="metric-note">{note}</div> : null}
    </article>
  );
}
