import React from 'react';
import AppShell from '../../../components/layout/AppShell';
import SectionCard from '../../../components/ui/SectionCard';
import StatusBadge from '../../../components/ui/StatusBadge';
import Timeline from '../../../components/ui/Timeline';
import {getProtocol} from '../../../services/cartografiaMockService';

export default function ProtocolPage() {
  const protocol = getProtocol();

  return (
    <AppShell
      activePath="/sicar/protocolos/GEO-2026-000184"
      breadcrumb={['SiCAR', 'Protocolos', protocol.id]}
      title="Protocolo de validação cartográfica"
      subtitle="Demanda institucional criada a partir do Kit de Atualização Cartográfica."
    >
      <div className="grid two">
        <SectionCard title={protocol.id}>
          <div className="detail-list">
            <div className="detail-item">
              <div className="detail-label">Destinatário</div>
              <div className="detail-value">{protocol.recipient}</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Status</div>
              <div className="detail-value">
                <StatusBadge>{protocol.status}</StatusBadge>
              </div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Prioridade</div>
              <div className="detail-value">{protocol.priority}</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">SLA sugerido</div>
              <div className="detail-value">{protocol.suggestedSla}</div>
            </div>
          </div>
        </SectionCard>
        <SectionCard title="Histórico">
          <Timeline items={protocol.timeline} />
        </SectionCard>
      </div>
    </AppShell>
  );
}
