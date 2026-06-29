import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

const items = [
  {label: 'Visão geral', href: '/sicar', icon: 'VG', match: ['/sicar']},
  {label: 'Análises automatizadas', href: '/sicar', icon: 'AA', match: ['/automatizadas']},
  {label: 'Análise semiautomática', href: '/sicar/analises', icon: 'AS', match: ['/sicar/analises']},
  {label: 'Cadastros', href: '/sicar/analises', icon: 'CA', match: ['/cadastros']},
  {label: 'Bases geoespaciais', href: '/sicar/analises/CAR-BA-000184/cartografia/suficiencia', icon: 'BG', match: ['/bases']},
  {label: 'CARtografia', href: '/sicar/analises/CAR-BA-000184/cartografia', icon: 'CT', match: ['/cartografia']},
  {label: 'Protocolos', href: '/sicar/protocolos/GEO-2026-000184', icon: 'PR', match: ['/protocolos']},
  {label: 'Configurações', href: '/sicar', icon: 'CO', match: ['/configuracoes']},
];

function isActive(item, activePath) {
  if (!activePath) {
    return false;
  }
  if (item.label === 'Visão geral') {
    return activePath === '/sicar';
  }
  return item.match.some((match) => activePath.includes(match));
}

export default function Sidebar({activePath}) {
  const cartografiaIcon = useBaseUrl('/img/cartografia-isotipo.png');

  return (
    <aside className="shell-sidebar">
      <div className="sidebar-title">Navegação</div>
      {items.map((item) => (
        <Link
          key={item.label}
          className={`sidebar-link ${isActive(item, activePath) ? 'active' : ''}`}
          to={item.href}
        >
          <span className="sidebar-icon">
            {item.label === 'CARtografia' ? (
              <img src={cartografiaIcon} alt="" className="sidebar-logo-icon" />
            ) : (
              item.icon
            )}
          </span>
          <span>{item.label}</span>
        </Link>
      ))}
    </aside>
  );
}
