import React from 'react';
import AppShell from '../../components/layout/AppShell';
import SicarDashboard from '../../components/sicar/SicarDashboard';

export default function SicarHomePage() {
  return (
    <AppShell
      activePath="/sicar"
      breadcrumb={['SiCAR', 'Visão geral']}
      title="Visão geral do SiCAR"
      subtitle="Painel demonstrativo de processamento automatizado e fila semiautomática."
    >
      <SicarDashboard />
    </AppShell>
  );
}
