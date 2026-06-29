import React from 'react';
import AppShell from '../../../components/layout/AppShell';
import SemiAutomaticQueue from '../../../components/sicar/SemiAutomaticQueue';

export default function AnalisesPage() {
  return (
    <AppShell
      activePath="/sicar/analises"
      breadcrumb={['SiCAR', 'Análise semiautomática']}
      title="Fila de análise semiautomática"
      subtitle="Casos que exigem validação técnica e formação de convicção cartográfica."
    >
      <SemiAutomaticQueue />
    </AppShell>
  );
}
