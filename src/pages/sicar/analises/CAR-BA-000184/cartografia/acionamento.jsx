import React from 'react';
import AppShell from '../../../../../components/layout/AppShell';
import InstitutionalProtocolPanel from '../../../../../components/cartografia/InstitutionalProtocolPanel';

export default function AcionamentoPage() {
  return (
    <AppShell
      activePath="/sicar/analises/CAR-BA-000184/cartografia/acionamento"
      breadcrumb={['SiCAR', 'CARtografia', 'Acionamento institucional']}
      title="Canal de Acionamento Institucional"
      subtitle="O Kit deixa de ser um PDF solto e vira uma demanda rastreável."
    >
      <InstitutionalProtocolPanel />
    </AppShell>
  );
}
