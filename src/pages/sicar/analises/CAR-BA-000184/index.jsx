import React from 'react';
import AppShell from '../../../../components/layout/AppShell';
import CaseDetails from '../../../../components/sicar/CaseDetails';

export default function CasePage() {
  return (
    <AppShell
      activePath="/sicar/analises"
      breadcrumb={['SiCAR', 'Análise semiautomática', 'CAR-BA-000184']}
      title="Detalhe do caso"
      subtitle="Abertura do caso principal da demo dentro do fluxo SiCAR."
    >
      <CaseDetails caseId="CAR-BA-000184" />
    </AppShell>
  );
}
