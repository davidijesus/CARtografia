import React from 'react';
import AppShell from '../../../../../components/layout/AppShell';
import DossierPanel from '../../../../../components/cartografia/DossierPanel';
import {generateDossier} from '../../../../../services/cartografiaMockService';

export default function DossierPage() {
  generateDossier();

  return (
    <AppShell
      activePath="/sicar/analises/CAR-BA-000184/cartografia/dossie"
      breadcrumb={['SiCAR', 'CARtografia', 'Dossiê CARtográfico']}
      title="Dossiê CARtográfico"
      subtitle="Artefato técnico para revisar evidências e apoiar a decisão humana."
    >
      <DossierPanel />
    </AppShell>
  );
}
