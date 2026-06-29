import React from 'react';
import AppShell from '../../../../../components/layout/AppShell';
import UpdateKitPanel from '../../../../../components/cartografia/UpdateKitPanel';
import {generateUpdateKit} from '../../../../../services/cartografiaMockService';

export default function KitPage() {
  generateUpdateKit();

  return (
    <AppShell
      activePath="/sicar/analises/CAR-BA-000184/cartografia/kit"
      breadcrumb={['SiCAR', 'CARtografia', 'Kit de Atualização']}
      title="Kit de Atualização Cartográfica"
      subtitle="Demanda técnica pronta para acionar geoprocessamento, campo ou contratação."
    >
      <UpdateKitPanel />
    </AppShell>
  );
}
