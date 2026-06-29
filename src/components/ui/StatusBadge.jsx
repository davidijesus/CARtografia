import React from 'react';

const variants = {
  Automatizado: 'status-green',
  Semiautomático: 'status-yellow',
  'Análise semiautomática': 'status-yellow',
  Pendente: 'status-gray',
  'Baixa suficiência': 'status-red',
  'Aguardando validação': 'status-yellow',
  'Aguardando validação cartográfica': 'status-yellow',
  'Protocolo aberto': 'status-blue',
  'Dossiê gerado': 'status-green',
  'Kit gerado': 'status-blue',
  Alto: 'status-red',
  Médio: 'status-yellow',
  Alta: 'status-red',
  'Aguardando aceite': 'status-yellow',
};

export default function StatusBadge({children, tone}) {
  const variant = tone || variants[children] || 'status-gray';
  return <span className={`status-badge ${variant}`}>{children}</span>;
}
