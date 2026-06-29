import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {getSemiAutomaticCases} from '../../services/sicarMockService';
import DataTable from '../ui/DataTable';
import PrimaryButton from '../ui/PrimaryButton';
import StatusBadge from '../ui/StatusBadge';

export default function SemiAutomaticQueue() {
  const cartografiaIcon = useBaseUrl('/img/cartografia-isotipo.png');
  const cases = getSemiAutomaticCases();
  const columns = [
    {key: 'id', label: 'ID do caso'},
    {key: 'municipality', label: 'Município/UF', render: (row) => `${row.municipality}/${row.state}`},
    {key: 'reason', label: 'Motivo'},
    {key: 'affectedLayer', label: 'Camada afetada'},
    {key: 'risk', label: 'Risco', render: (row) => <StatusBadge>{row.risk}</StatusBadge>},
    {key: 'estimatedManualTime', label: 'Tempo manual estimado'},
    {key: 'status', label: 'Status', render: (row) => <StatusBadge>{row.status}</StatusBadge>},
    {
      key: 'action',
      label: 'Ação',
      render: (row) => (
        <PrimaryButton
          variant={row.id === 'CAR-BA-000184' ? 'primary' : 'secondary'}
          to={row.id === 'CAR-BA-000184' ? '/sicar/analises/CAR-BA-000184' : '/sicar/analises'}
        >
          {row.id === 'CAR-BA-000184' ? (
            <>
              <img src={cartografiaIcon} alt="" className="button-icon" />
              Avaliar com CARtografia
            </>
          ) : (
            'Avaliar'
          )}
        </PrimaryButton>
      ),
    },
  ];

  return (
    <div className="grid">
      <div className="notice">
        Casos que não foram concluídos pela análise automatizada e exigem validação técnica.
        A CARtografia pode ser acionada sem sair do ambiente SiCAR/RER.
      </div>
      <DataTable columns={columns} rows={cases} />
    </div>
  );
}
